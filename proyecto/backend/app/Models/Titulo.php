<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Titulo extends Model
{
    protected $table = 'titulo';
    use HasFactory;

    public function genero()
    {
        return $this->belongsTo(Genero::class,'idTitulo', 'idGenero');
    }
    public function publisher()
    {
        return $this->belongsTo(Publisher::class,'idTitulo', 'idPublisher');
    }
    public function desarrollador()
    {
        return $this->belongsTo(Desarrollador::class,'idTitulo', 'idDesarrollador');
    }
    public function consola()
    {
        return $this->belongsTo(Consola::class,'idTitulo', 'idConsola');
    }
}
