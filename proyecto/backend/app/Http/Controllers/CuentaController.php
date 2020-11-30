<?php

namespace App\Http\Controllers;

use App\Models\Cuenta;
use Illuminate\Http\Request;
use App\Http\Resources\CuentaCollection;
use App\Http\Resources\Cuenta as CuentaResource;
use Illuminate\Support\Facades\DB;
class CuentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('cuenta')->leftJoin('rol', 'cuenta.idRol', '=', 'rol.idRol')->select('cuenta.*', 'rol.nombreRol')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Cuenta::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
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
     * @urlParam id int id of the account to delete.
     * 
     * @param  \App\Models\Cuenta  $cuenta
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cuenta::destroy($id);
    }
}
