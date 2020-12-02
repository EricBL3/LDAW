<?php

namespace App\Http\Controllers;

use App\Models\Consola;
use Illuminate\Http\Request;

class ConsolaController extends Controller
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
     * @param  \App\Models\Consola  $consola
     * @return \Illuminate\Http\Response
     */
    public function show(Consola $consola)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Consola  $consola
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Consola $consola)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Consola  $consola
     * @return \Illuminate\Http\Response
     */
    public function destroy(Consola $consola)
    {
        //
    }
    /**
     * Get consoles.
     *
     * This endpoint allows you to retrive all the consoles in the system.
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getConsola(){
        $consola=Consola::select('idConsola','nombreConsola')->get();
        return $consola;
    }
}
