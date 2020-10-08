<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableCuenta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cuenta', function (Blueprint $table) {
            $table->increments('idCuenta');
            $table->unsignedInteger('idRol');
            $table->foreign('idRol')->references('idRol')->on('rol')->onDelete('cascade');
            $table->string('nombre');
            $table->string('correoCuenta')->unique();
            $table->string('telefonoCuenta');
            $table->string('usuario')->unique();
            $table->string('contraseña');

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
        Schema::dropIfExists('cuenta');
    }
}
