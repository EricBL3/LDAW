<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    protected $table= 'genero';
    use HasFactory;

    public function titulos()
    {
        return $this->hasMany(Titulo::class,'idGenero','idTitulo');
    }
}
