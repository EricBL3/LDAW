<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRolPrivilegio extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rol_privilegio', function (Blueprint $table) {
            $table->increments('idRolPrivilegio');
            $table->unsignedInteger('idRol');
            $table->foreign('idRol')->references('idRol')->on('rol')->onDelete('cascade');
            $table->unsignedInteger('idPrivilegio');
            $table->foreign('idPrivilegio')->references('idPrivilegio')->on('privilegio')->onDelete('cascade');
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
        Schema::dropIfExists('rol_privilegio');
    }
}
