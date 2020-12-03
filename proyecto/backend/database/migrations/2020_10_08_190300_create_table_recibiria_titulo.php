<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRecibiriaTitulo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recibiria_titulo', function (Blueprint $table) {
            $table->increments('idRecibiriaTitulo');
            $table->unsignedInteger('idTitulo');
            $table->foreign('idTitulo')->references('idTitulo')->on('titulo')->onDelete('cascade');
            $table->unsignedInteger('idJuego');
            $table->foreign('idJuego')->references('idJuego')->on('juego')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recibiria_titulo');
    }
}
