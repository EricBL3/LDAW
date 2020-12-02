<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oferta extends Model
{

    protected $table = "oferta";

    protected $primaryKey = 'idOferta';


    protected $fillable = [

        'idCuentaEnviar',
        'idCuentaRecibir',
        'idJuegoPorEnviar',
        'idJuegoPorRecibir',
        'estado'
        
    ];
}
