<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class GeneroSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('genero')->insert([
            'nombreGenero' => "Acción",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "Aventura",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "Plataformas",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "Miedo",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "Deportes",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "RPG",
        ]);
        DB::table('genero')->insert([
            'nombreGenero' => "Estrategia",
        ]);
    }
}
