<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTitulo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('titulo', function (Blueprint $table) {
            $table->increments('idTitulo');
            $table->string('nombreTitulo');
            $table->unsignedInteger('idGenero');
            $table->foreign('idGenero')->references('idGenero')->on('genero')->onDelete('cascade');
            $table->unsignedInteger('idPublisher');
            $table->foreign('idPublisher')->references('idPublisher')->on('publisher')->onDelete('cascade');
            $table->unsignedInteger('idConsola');
            $table->foreign('idConsola')->references('idConsola')->on('consola')->onDelete('cascade');
            $table->unsignedInteger('idDesarrollador');
            $table->foreign('idDesarrollador')->references('idDesarrollador')->on('desarrollador')->onDelete('cascade');
            $table->string('edicion')->nullable();
            $table->string('version')->nullable();
            $table->date('fechaLanzamiento');
            $table->string('urlImagen');
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
        Schema::dropIfExists('titulo');
    }
}
