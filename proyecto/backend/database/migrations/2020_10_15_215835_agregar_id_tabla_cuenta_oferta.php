<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarIdTablaCuentaOferta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oferta', function (Blueprint $table) {
            $table->foreign('idCuentaEnviar')->references('id')->on('cuenta')->onDelete('cascade');
            $table->foreign('idCuentaRecibir')->references('id')->on('cuenta')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('oferta', function (Blueprint $table) {
            //
        });
    }
}
