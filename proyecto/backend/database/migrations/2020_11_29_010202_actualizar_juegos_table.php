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
            $table->unsignedInteger('idTituloRecibir1')->nullable();
            $table->foreign('idTituloRecibir1')->references('idTitulo')->on('titulo')->onDelete('cascade');
            $table->unsignedInteger('idTituloRecibir2')->nullable();
            $table->foreign('idTituloRecibir2')->references('idTitulo')->on('titulo')->onDelete('cascade');
            $table->unsignedInteger('idTituloRecibir3')->nullable();
            $table->foreign('idTituloRecibir3')->references('idTitulo')->on('titulo')->onDelete('cascade');
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
