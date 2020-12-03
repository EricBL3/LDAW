<?php

namespace App\Http\Controllers;

use App\Models\Consola;
use Illuminate\Http\Request;
/**
 * @group Console management
 *
 * APIs for managing consoles.
 */
class ConsolaController extends Controller
{
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
