<?php

namespace App\Http\Controllers;

use App\Models\Titulo;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\String_;

class TituloController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$titulo = Titulo::all();
        /*$titulo = Titulo::where('idTitulo', 3)->first();
        $nombreGenero= $titulo->genero->nombreGenero;
        $nombreConsola= $titulo->consola->nombreConsola;
        $nombrePublisher= $titulo->publisher->nombrePublisher;
        $nombreDesarrollador= $titulo->desarrollador->nombreDesarrollador;

        echo $nombreGenero;
        echo $nombreConsola;
        echo $nombrePublisher;
        echo $nombreDesarrollador;
        */
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
     * @param  \App\Models\Titulo  $titulo
     * @return \Illuminate\Http\Response
     */
    public function show(Titulo $titulo)
    {
        //
        $data = Titulo::select('titulo.nombreTitulo', 'consola.nombreConsola', 'genero.nombreGenero', 'publisher.nombrePublisher')
            ->leftjoin('genero', 'genero.idGenero', '=', 'titulo.idGenero')
            ->leftjoin('publisher', 'publisher.idPublisher', '=', 'titulo.idPublisher')
            ->leftjoin('consola', 'consola.idConsola', '=', 'consola.idConsola')
            ->get();
        echo $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Titulo  $titulo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Titulo $titulo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Titulo  $titulo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Titulo $titulo)
    {
        //
    }
    public function getTitulo(String $busqueda = '')
    {

        $strGenero = '';
        $strTitulo='';
        $strConsola = '';
        $strDesarrollador = '';
        $strPublisher = '';
        $comparadorGenero = '!=';
        $comparadorTitulo='!=';
        $comparadorConsola = '!=';
        $comparadorDesarrollador = '!=';
        $comparadorPublisher = '!=';
        $data = explode("-", $busqueda);
        if (strcmp($data[0], '') !== 0) {
            $strTitulo = $data[0];
            $comparadorTitulo = 'like';
        }
        if (strcmp($data[1], '') !== 0) {
            $strGenero = $data[1];
            $comparadorGenero = '=';
        }
        if (strcmp($data[2], '') !== 0) {
            $strConsola = $data[2];
            $comparadorConsola = '=';
        }
        if (strcmp($data[3], '') !== 0) {
            $strPublisher = $data[3];
            $comparadorPublisher = '=';
        }
        if (strcmp($data[4], '') !== 0) {
            $strDesarrollador = $data[4];
            $comparadorDesarrollador = '=';
        }
        $titulos = Titulo::select('nombreTitulo', 'urlImagen')
            ->join('genero', 'genero.idGenero', '=', 'titulo.idGenero')
            ->join('consola', 'consola.idConsola', '=', 'titulo.idConsola')
            ->join('desarrollador', 'desarrollador.idDesarrollador', '=', 'titulo.idDesarrollador')
            ->join('publisher', 'publisher.idPublisher', '=', 'titulo.idPublisher')
            ->select('nombreTitulo', 'urlImagen', 'nombreGenero', 'nombreDesarrollador', 'nombrePublisher', 'nombreConsola','idTitulo')
            ->where('nombreGenero', $comparadorGenero,$strGenero)
            ->where('nombreConsola', $comparadorConsola,$strConsola)
            ->where('nombrePublisher', $comparadorPublisher,$strPublisher)
            ->where('nombredesarrollador', $comparadorDesarrollador,$strDesarrollador)
            ->where('nombreTitulo', $comparadorTitulo, '%'.$strTitulo.'%')
            ->get();

        return $titulos;
    }
    public function getData(String $busqueda = '')
    {
        $data = explode("-", $busqueda);
        $comparadorPublisher = '!=';
        $titulos = Titulo::join('genero', 'genero.idGenero', '=', 'titulo.idGenero')
            ->join('consola', 'consola.idConsola', '=', 'titulo.idConsola')
            ->join('desarrollador', 'desarrollador.idDesarrollador', '=', 'titulo.idDesarrollador')
            ->join('publisher', 'publisher.idPublisher', '=', 'titulo.idPublisher')
            ->select('idTitulo', 'nombreTitulo', 'urlImagen', 'nombreGenero', 'nombreDesarrollador', 'nombrePublisher', 'nombreConsola')
            ->orderBy('idTitulo')
            ->where('nombreGenero', $comparadorPublisher, 'Acción')
            ->get();
        return $titulos;
    }

    public function mostrarTitulo( int $idTitulo)
    {
        $titulo = Titulo::where('idTitulo','=',$idTitulo)
        ->select('idTitulo', 'nombreTitulo', 'edicion', 'version','urlImagen')
        ->first();
        return $titulo;
    }
    public function getTitulos(){
        $titulo=Titulo::select('idTitulo','nombreTitulo')->get();
        return $titulo;
    }
}
