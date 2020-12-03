<?php

namespace App\Http\Controllers;

use App\Models\Desarrollador;
use Illuminate\Http\Request;

/**
 * @group Developer management
 *
 * APIs for managing developers.
 */
class DesarrolladorController extends Controller
{
    /**
     * Get developers.
     *
     * This endpoint allows you to retrive all the developers in the system.
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDesarrollador(){
        $desarrollador=Desarrollador::select('idDesarrollador','nombreDesarrollador')->get();
        return $desarrollador;
    }
}
