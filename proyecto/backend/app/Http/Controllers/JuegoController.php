<?php

namespace App\Http\Controllers;

use App\Models\Juego;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;

class JuegoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Models\Juego  $juego
     * @return \Illuminate\Http\Response
     */
    public function show(Juego $juego)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Juego  $juego
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Juego $juego)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Juego  $juego
     * @return \Illuminate\Http\Response
     */
    public function destroy(Juego $juego)
    {
        //
    }
    public function listarJuegos(int $idTitulo)
    {
        $juegos = Juego::where('idTitulo', '=', $idTitulo)
            ->get();
        return $juegos;
    }
    public function misJuegos(int $idCuenta)
    {
        $juegos = Juego::join('cuenta_juego', 'juego.idJuego', '=', 'cuenta_juego.idJuego')
            ->where('cuenta_juego.idCuenta', '=', $idCuenta)
            ->join('titulo', 'juego.idTitulo', '=', 'titulo.idTitulo')
            ->join('consola', 'titulo.idConsola', '=', 'consola.idConsola')
            ->select('juego.idJuego', 'titulo.idTitulo', 'juego.urlImagen', 'cuenta_juego.idCuenta', 'titulo.nombreTitulo', 'juego.condiciones', 'consola.nombreConsola')
            ->get();
        return $juegos;
    }
    public function borrrarjuego(int $idjuego)
    {
        DB::beginTransaction();
        try {
            Juego::where('idjuego', $idjuego)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Juego eliminado con exito',
            ], 201);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar usuario',
            ], 202);
        }
    }
}
