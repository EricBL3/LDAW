<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facade\File;
use Illuminate\Http\Request;

class ArchivoController extends Controller
{
    /**
     * Upload a File.
     *
     * This endpoint allows you to upload a file in the system.
     * 
     * 
     * @bodyParam file required to store
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    function upload(Request $request){
        $result= $request->file('file')->store('Archivos');
        return ["result"=>$result];
    }
    /**
     * Download a File.
     *
     * This endpoint allows you to download a file stored in the system.
     * 
     * 
     * @bodyParam name of thte file required to dowload
     * 
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    function dowload(String $ruta){
        $path=storage_path('app\Archivos\\'.$ruta);
        return response()->download($path);
    }
    
}
