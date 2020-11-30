<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Cuenta;

/**
 * @group JWT management
 *
 * APIs for registering users and JWT authentication.
 */
class JWTAuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    /**
     * Register a User.
     *
     * This endpoint allows you to register a user in the system.
     * 
     * @unauthenticated
     * 
     * @bodyParam idRol int required id of the selected role (1 for admin, 2 for regular user).
     * @bodyParam nombre string required name of the person that is registering in the platform.
     * @bodyParam correoCuenta string required email that will be used for the new account.
     * @bodyParam telefonoCuenta string required phone of the person registering to the platform.
     * 
     * @response {
     *  "id": 1,
     *  "respuesta": "hola",
     * }
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'idRol' => 'required',
            'nombre' => 'required|string',
            'correoCuenta' => 'required|email|unique:cuenta|max:100',
            'telefonoCuenta' => 'required|string|size:10',
            'usuario' => 'required|string|unique:cuenta',
            'password' => 'required|confirmed|string|min:6',
        ]);

        $cuenta = Cuenta::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));


        return response()->json([
            'message' => 'Successfully registered',
            'cuenta' => $cuenta
        ], 201);
        
    }

    /**
     * Get a JWT via given credentials.
     *
     * This endpoint will return the JWT token needed to make any other request to the API.
     * 
     * @unauthenticated
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
    	$validator = Validator::make($request->all(), [
            'correoCuenta' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = auth()->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * This endpoint will return the profile of the user that signed in to the application.
     * 
     * @authenticated
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * This endpoint will logout the user and invalidate the JWT token.
     * 
     * @authenticated
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * This endpoint will refresh the JWT token of the signed in user.
     * 
     * @authenticated
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
