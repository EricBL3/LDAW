<?php

namespace App\Http\Controllers;

use App\Models\Oferta;
use App\Http\Resources\OfertaCollection;
use Illuminate\Support\Facades\DB;


use Illuminate\Http\Request;
/**
 * @group Offer management
 *
 * APIs for managing offers.
 */
class OfertaController extends Controller
{
    /**
     * Display a listing of the offers in the system.
     *
     * @authenticated
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new OfertaCollection(Oferta::all());
    }

    /**
     * Store a newly created offer.
     *
     * @authenticated
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
     * Display the specified offer.
     *
     * @urlParam oferta int required id of the game you are about to offer to show. Example: 2
     * 
     * @authenticated
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
    /**
     * Display the offers that an account has sent.
     *
     * @urlParam cuenta int required id of the account that sent the offers, and wants to consult them. Example: 2
     * 
     * @authenticated
     * 
     * @param  \App\Models\Oferta  $oferta
     * @return \Illuminate\Http\Response
     */
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
     * Update the offer status
     *
     * @urlParam cuenta int required id of the account that sent the offers, and wants to consult them. Example: 2
     * 
     * @bodyParam idOferta int required id of the offer that you want to update Example: 2
     * @bodyParam estado string required the new status of the offer, after being altered (1pendiente, aceptada, rechadaza, terminada). Example: aceptada
     * 
     * @authenticated
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

}
