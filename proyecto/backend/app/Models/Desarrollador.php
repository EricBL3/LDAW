<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desarrollador extends Model
{
    protected $table = 'desarrollador';

    use HasFactory;

    protected $fillable = [
        'nombreDesarrollador',
    ];

    public function titulos()
    {
        return $this->hasMany('App\Models\Titulo');
    }
}
