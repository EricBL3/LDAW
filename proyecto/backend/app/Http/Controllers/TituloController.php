<?php

namespace App\Http\Controllers;

use App\Models\Titulo;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\String_;

/**
 * @group Title management
 *
 * APIs for consulting titles.
 */
class TituloController extends Controller
{

    /**
     * Get filter titles
     * 
     * Display the specified titles under the search parameter.
     *
     * @bodyParam busqueda string required string to make the search of the titles.
     * @response {
     *  "idTitulo": 1,
     *  "nombreTitulo": "",
     *  "nombreGenero": "",
     *  "nombreDesarrollador: "",
     *  "nombrePublisher": "",
     *  "nombreConsola": "",
     *  "urlImagen": "",
     * }
     * 
     * @authenticated
     */
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

    /**
     * Get title
     * 
     * Display the specified title.
     *
     * @bodyParam idTitulo int required id of the selected title.
     * @response {
     *  "idTitulo": 1,
     *  "nombreTitulo": "",
     *  "edicion": "",
     *  "version": "",
     *  "urlImagen": "",
     * }
     * 
     * @authenticated
     */
    public function mostrarTitulo( int $idTitulo)
    {
        $titulo = Titulo::where('idTitulo','=',$idTitulo)
        ->select('idTitulo', 'nombreTitulo', 'edicion', 'version','urlImagen')
        ->first();
        return $titulo;
    }

    /**
     * Get titles.
     *
     * This endpoint allows you to retrive all the titles in the system.
     * 
     * @authenticated
     * @return \Illuminate\Http\JsonResponse
     */
    public function getTitulos(){
        $titulo=Titulo::select('idTitulo','nombreTitulo')->get();
        return $titulo;
    }
}
