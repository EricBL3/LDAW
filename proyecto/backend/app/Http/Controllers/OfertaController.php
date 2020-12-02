<?php

namespace App\Http\Controllers;

use App\Models\Oferta;
use App\Http\Resources\OfertaCollection;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;

class OfertaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new OfertaCollection(Oferta::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([

            'idCuentaEnviar' => 'required',
            'idCuentaRecibir' => 'required',
            'idJuegoPorEnviar' => 'required',
            'idJuegoPorRecibir' => 'required',
            'estado' => 'required'        
        ]);

        $oferta = Oferta::create($request->all());

        return (new OfertaCollection($oferta))
            ->response()
            ->setStatusCode(201);
    }

     public function getIdCuentaOtro($idJuego){
        return DB::table('cuenta_juego')->where('idJuego', '=', $idJuego)->select('idCuenta')->get();
     }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function show($oferta)
    {
        return DB::table('oferta')->leftJoin('cuenta', 'oferta.idCuentaRecibir', '=','cuenta.id')
                                  ->leftJoin('juego', 'oferta.idJuegoPorRecibir', '=','juego.idJuego')
                                  ->leftJoin('titulo', 'juego.idTitulo', '=','titulo.idTitulo')
                                  ->leftJoin('consola', 'titulo.idConsola', '=','consola.idConsola')
                                  ->leftJoin('genero', 'titulo.idGenero', '=','genero.idGenero')
                                  ->leftJoin('desarrollador', 'titulo.idDesarrollador', '=','desarrollador.idDesarrollador')
                                  ->leftJoin('publisher', 'titulo.idPublisher', '=','publisher.idPublisher')
                                   -> where('idJuegoPorEnviar', '=', $oferta) -> get();
    }

    public function showOfertasEnviadas($idCuentaEnviar){
        return DB::table('oferta')->leftJoin('cuenta', 'oferta.idCuentaRecibir', '=','cuenta.id')
        ->leftJoin('juego', 'oferta.idJuegoPorRecibir', '=','juego.idJuego')
        ->leftJoin('titulo', 'juego.idTitulo', '=','titulo.idTitulo')
        ->leftJoin('consola', 'titulo.idConsola', '=','consola.idConsola')
        ->leftJoin('genero', 'titulo.idGenero', '=','genero.idGenero')
        ->leftJoin('desarrollador', 'titulo.idDesarrollador', '=','desarrollador.idDesarrollador')
        ->leftJoin('publisher', 'titulo.idPublisher', '=','publisher.idPublisher')
         -> where('idCuentaEnviar', '=', $idCuentaEnviar) -> get();
    }

    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Oferta $idOferta)
    {
        $request->validate([
            'idOferta' => 'required',
            'estado' => 'required',
        ]);
       $query = DB::table('oferta')->where('idOferta', $request->get('idOferta'))->update(['estado'=> $request->get('estado')]);
        
        return $query;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oferta $oferta)
    {
        //
    }
}
