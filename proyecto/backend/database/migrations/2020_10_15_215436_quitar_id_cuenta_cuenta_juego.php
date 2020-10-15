<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class QuitarIdCuentaCuentaJuego extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('cuenta_juego', function (Blueprint $table) {
            $table->dropForeign('cuenta_juego_idcuenta_foreign');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cuenta_juego', function (Blueprint $table) {
            //
        });
    }
}
