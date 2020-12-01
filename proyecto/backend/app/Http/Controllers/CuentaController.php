<?php

namespace App\Http\Controllers;

use App\Models\Cuenta;
use Illuminate\Http\Request;
use App\Http\Resources\CuentaCollection;
use App\Http\Resources\Cuenta as CuentaResource;
use Illuminate\Support\Facades\DB;

/**
 * @group Account management
 *
 * APIs for retrieving and updating accounts.
 */
class CuentaController extends Controller
{
    /**
     * Display a listing of the accounts in the system.
     * 
     * 
     * 
     * @authenticated
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('cuenta')->leftJoin('rol', 'cuenta.idRol', '=', 'rol.idRol')->select('cuenta.*', 'rol.nombreRol')->get();
    }

    /**
     * Store a newly created resource in storage.
     * @hideFromAPIDocumentation
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified account.
     * 
     * @urlParam cuenta int required id of the account to show. Example: 2
     * 
     * @authenticated
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Cuenta::findOrFail($id);
    }

    /**
     * Update the specified account.
     *
     * @urlParam cuenta int required id of the account to show. Example: 2
     * 
     * @bodyParam idRol int required id of the selected role (1 for admin, 2 for regular user). Example: 2
     * @bodyParam nombre string required name of the person that is registering in the platform. Example: Eric edited
     * @bodyParam correoCuenta string email that will be used for the new account. Example: ericb@gmail.com
     * @bodyParam telefonoCuenta string required phone of the person registering to the platform. Example: 4428718364
     * @bodyParam usuario string username of the person that is registering to the platform. Example: eric_bl3
     * @bodyParam password string password of the account being registered. Example: eric1234
     * @bodyParam password_confirmation string confirmed password of the account being registered. Example: eric1234
     * 
     * @authenticated
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'idRol' => 'required',
            'nombre' => 'required|string',
            
            'telefonoCuenta' => 'required|string|size:10',
            
        ]);


        $cuenta = Cuenta::find($id);

        if(strcmp($cuenta->correoCuenta, $request->input("correoCuenta")) != 0)
        {
            $request->validate(['correoCuenta' => 'required|email|unique:cuenta|max:100',]);
        }
        else
        {
            $request->validate(['correoCuenta' => 'required|email|max:100',]);
        }

        if(strcmp($cuenta->usuario, $request->input("usuario")) != 0)
        {
            $request->validate(['usuario' => 'required|string|unique:cuenta',]);
        }
        else
        {
            $request->validate(['usuario' => 'required|string',]);
        }

        $cuenta->idRol = $request->input("idRol");
        $cuenta->nombre = $request->input("nombre");
        $cuenta->correoCuenta = $request->input("correoCuenta");
        $cuenta->telefonoCuenta = $request->input("telefonoCuenta");
        $cuenta->usuario = $request->input("usuario");

        if(strcmp($request->input("password"), "") != 0)
        {
            $request->validate(['password' => 'required|confirmed|string|min:6',]);
            $cuenta->password = bcrypt($request->input("password"));
        }

        $cuenta->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * 
     * 
     * @urlParam cuenta int required id of the account to delete.
     * 
     * @authenticated
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cuenta::destroy($id);
    }
}
