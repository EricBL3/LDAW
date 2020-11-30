<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facade\File;
use Illuminate\Http\Request;

class ArchivoController extends Controller
{
    //
    function upload(Request $request){
        $result= $request->file('file')->store('Archivos');
        return ["result"=>$result];
    }
    
    function dowload(Request $request){
        $hola="Hola";
        return $hola;
    }
    function hola(){
        $hola="Hola";
        return $hola;
    }
}
