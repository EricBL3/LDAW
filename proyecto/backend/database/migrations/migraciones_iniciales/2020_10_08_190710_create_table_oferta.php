<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableOferta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oferta', function (Blueprint $table) {
            $table->increments('idOferta');
            $table->unsignedInteger('idCuentaEnviar');
            $table->foreign('idCuentaEnviar')->references('idCuenta')->on('cuenta')->onDelete('cascade');
            $table->unsignedInteger('idCuentaRecibir');
            $table->foreign('idCuentaRecibir')->references('idCuenta')->on('cuenta')->onDelete('cascade');
            $table->unsignedInteger('idJuegoPorEnviar');
            $table->foreign('idJuegoPorEnviar')->references('idJuego')->on('juego')->onDelete('cascade');
            $table->unsignedInteger('idJuegoPorRecibir');
            $table->foreign('idJuegoPorRecibir')->references('idJuego')->on('juego')->onDelete('cascade');
            $table->enum('estado', ['pendiente', 'aceptada', 'rechazada', 'terminada']);
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
        Schema::dropIfExists('oferta');
    }
}
