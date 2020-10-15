<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class QuitarIdCuentaOferta extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('oferta', function (Blueprint $table) {
            $table->dropForeign('oferta_idcuentaenviar_foreign');
            $table->dropForeign('oferta_idcuentarecibir_foreign');
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
