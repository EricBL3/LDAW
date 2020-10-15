<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenombrarIdCuentaContrasenñaCuenta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cuenta', function (Blueprint $table) {
            $table->renameColumn('idCuenta', 'id');
            $table->renameColumn('contraseña', 'password');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cuenta', function (Blueprint $table) {
            //
        });
    }
}
