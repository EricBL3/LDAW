<?php

namespace App\Http\Controllers;

use App\Models\Juego;
use App\Models\Titulo;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\VarDumper\VarDumper;

/**
 * @group Game management
 *
 * APIs for adding, consulting and deleting games.
 */

class JuegoController extends Controller
{

    /**
     * Show a specific game
     * 
     * Displays the specified game of a title.
     *
     * @urlParam itTitulo int required id to make the search of the titles.
     * 
     * @response {
     *  "idJuego": 1,
     *  "idTitulo": 1,
     *  "condiciones": "nuevo",
     *  "pathImagen: "Archivos/miImagen.png",
     *  "tituloRecibir1": "halo 5",
     *  "tituloRecibir2": "minecraft",
     *  "tituloRecibir3": "call of duty",
     * }
     */

    public function listarJuegos(int $idTitulo)
    {
        $juegos = Juego::where('idTitulo', '=', $idTitulo)
            ->get();
        return $juegos;
    }
    /**
     * Get my games
     * 
     * Display the specified games of an account.
     *
     * @urlParam idCuenta int required string to make the search of the titles. Example: 1
     * 
     * @return \Illuminate\Http\Response
     */
    public function misJuegos(int $idCuenta)
    {
        $juegos = Juego::join('cuenta_juego', 'juego.idJuego', '=', 'cuenta_juego.idJuego')
            ->where('cuenta_juego.idCuenta', '=', $idCuenta)
            ->join('titulo', 'juego.idTitulo', '=', 'titulo.idTitulo')
            ->join('consola', 'titulo.idConsola', '=', 'consola.idConsola')
            ->select('juego.idJuego','titulo.idTitulo','juego.tituloRecibir1','juego.tituloRecibir2','juego.tituloRecibir3', 'titulo.urlImagen','juego.pathImagen', 'cuenta_juego.idCuenta', 'titulo.nombreTitulo', 'juego.condiciones', 'consola.nombreConsola')
            ->get();
        return $juegos;
    }
    /**
     * Delete game
     * 
     * Delete an specified game of the systme.
     *
     * @urlParam idjuego int required int to make the removal of the game.
     * 
     * @return \Illuminate\Http\Response
     */
    public function borrrarjuego(int $idjuego)
    {
        DB::beginTransaction();
        try {
            Juego::where('idjuego', $idjuego)->delete();
            DB::commit();
            return response()->json([
                'message' => 'Juego eliminado con exito',
            ], 200);
        } catch (QueryException $err) {
            DB::rollBack();
            return response()->json([
                'message' => 'Error al eliminar usuario',
            ], 202);
        }
    }
    /**
     * Register game
     * 
     * Register a game in the system.
     *
     *@bodyParam condiciones int required id of the selected role (1 for admin, 2 for regular user).
     *@bodyParam urlImagen string required name of the person that is registering in the platform.
     *@bodyParam correoCuenta string required email that will be used for the new account.
     *@bodyParam telefonoCuenta string required phone of the person registering to the platform.
     * 
     * @return \Illuminate\Http\Response
     */
    public function registrarJuego ( Request $request, int $idCuenta)
    {
        $juego=Juego::create([
            'idTitulo'=>$request->input('idTitulo'),
            'condiciones' => $request->input('condiciones'),
            'pathImagen' => $request->input('pathImagen'),
            'tituloRecibir1' => $request->input('tituloRecibir1'),
            'tituloRecibir2' => $request->input('tituloRecibir2'),
            'tituloRecibir3' => $request->input('tituloRecibir3'),
        ]);
        $juego->cuentas()->attach($idCuenta);
        return response()->json([
            'message' => 'Successfully registered',
            'cuenta' => $juego
        ], 201);
    }
}
