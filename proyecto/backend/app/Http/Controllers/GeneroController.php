<?php

namespace App\Http\Controllers;

use App\Models\Genero;
use Illuminate\Http\Request;
/**
 * @group Genre management
 *
 * APIs for managing the genre for games.
 */
class GeneroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
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
     * @param  \App\Models\Genero  $genero
     * @return \Illuminate\Http\Response
     */
    public function show(Genero $genero)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Genero  $genero
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Genero $genero)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Genero  $genero
     * @return \Illuminate\Http\Response
     */
    public function destroy(Genero $genero)
    {
        //
    }
    /**
     * Get gender.
     *
     * This endpoint allows you to retrive all the genders in the system.
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */

    public function getGenero(){
        $generos=Genero::select('idGenero','nombreGenero')->get();
        return $generos;
    }
}
