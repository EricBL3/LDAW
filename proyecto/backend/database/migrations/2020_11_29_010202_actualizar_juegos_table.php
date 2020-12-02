<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ActualizarJuegosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('juego', function (Blueprint $table) {
            $table->renameColumn('urlImagen', 'pathImagen');
            $table->string('tituloRecibir1');
            $table->string('tituloRecibir2');
            $table->string('tituloRecibir3');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('juego', function (Blueprint $table) {
            //
        });
    }
}
