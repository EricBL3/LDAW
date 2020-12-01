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
     * @bodyParam idRol int required id of the selected role (1 for admin, 2 for regular user). Example: 1
     * @bodyParam nombre string required name of the person that is registering in the platform. Example: Eric
     * @bodyParam correoCuenta string required email that will be used for the new account. Example: eric@gmail.com
     * @bodyParam telefonoCuenta string required phone of the person registering to the platform. Example: 4428718934
     * @bodyParam usuario string required username of the person that is registering to the platform. Example: eric_bl
     * @bodyParam password string required password of the account being registered. Example: eric123
     * @bodyParam password_confirmation string required confirmed password of the account being registered. Example: eric123
     * 
     * @response {
     *  "message" : "Successfully registered",
     *  "cuenta": {
     *      "idRol": 1,
     *      "nombre": "Eric",
     *      "correoCuenta": "eric@gmail.com",
     *      "telefonoCuenta": "4428718934",
     *      "usuario": "eric_bl",
     *      "updated_at": "2020-12-01T15:33:46.000000Z",
     *      "created_at": "2020-12-01T15:33:46.000000Z",
     *      "id": 5
     * 
     *  }
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
     * @bodyParam correoCuenta string required email that will be used for the new account. Example: eric@gmail.com
     * @bodyParam password string required password of the account being registered. Example: eric123
     * 
     * @response {
     *  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNjgzNzYxMCwiZXhwIjoxNjA2ODQxMjEwLCJuYmYiOjE2MDY4Mzc2MTAsImp0aSI6IlczZFFSVk5KaEU0N0dUbEMiLCJzdWIiOjIsInBydiI6ImY3MTZiM2UwNDY3YTBhZmY0YmQ4ZWQ2ZDk0NzZmZTY5NzUwYTMzY2UifQ.KWAyRkbUOEaSkTJDLahO0COuSeiZPCwOwvmJoZ32bmA",
     *  "token_type": "bearer",
     *  "expires_in": 3600
     * }
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
     * @response {
     *  "idRol": 1,
     *  "nombre": "Eric",
     *  "correoCuenta": "eric@gmail.com",
     *  "telefonoCuenta": "4428718934",
     *  "usuario": "eric_bl",
     *  "updated_at": "2020-12-01T15:33:46.000000Z",
     *  "created_at": "2020-12-01T15:33:46.000000Z",
     *  "id": 5
     * }
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
     * @response {
     *  "message": "Successfully logged out"
     * }
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
     * @response {
     *  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwNjgzNzYxMCwiZXhwIjoxNjA2ODQxMjEwLCJuYmYiOjE2MDY4Mzc2MTAsImp0aSI6IlczZFFSVk5KaEU0N0dUbEMiLCJzdWIiOjIsInBydiI6ImY3MTZiM2UwNDY3YTBhZmY0YmQ4ZWQ2ZDk0NzZmZTY5NzUwYTMzY2UifQ.KWAyRkbUOEaSkTJDLahO0COuSeiZPCwOwvmJoZ32bmA",
     *  "token_type": "bearer",
     *  "expires_in": 3600
     * }
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
