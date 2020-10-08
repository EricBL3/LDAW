<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCuentaJuego extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuenta_juego', function (Blueprint $table) {
            $table->increments('idCuentaJuego');
            $table->unsignedInteger('idCuenta');
            $table->foreign('idCuenta')->references('idCuenta')->on('cuenta')->onDelete('cascade');
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
        Schema::dropIfExists('cuenta_juego');
    }
}
