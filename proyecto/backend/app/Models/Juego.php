<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Juego extends Model
{
    protected $table = 'juego';
    protected $primaryKey  = 'idJuego';

    use HasFactory;

    protected $fillable = [
        'condiciones',
        'pathImagen',
        'idTitulo',
        'tituloRecibir1',
        'tituloRecibir2',
        'tituloRecibir3'
    ];

    public function cuentas()
    {
        return $this->belongsToMany(Cuenta::class,'cuenta_juego','idJuego', 'idCuenta');
    }
    public function titulo(){

        return $this->belongsTo(Titulo::class,'idJuego','idTitulo');
    }
}

