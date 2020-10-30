<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ConsolaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consola')->insert([
            'nombreConsola' => "Xbox360",
                    ]);
        DB::table('consola')->insert([
            'nombreConsola' => "XboxOne",
        ]);
        DB::table('consola')->insert([
            'nombreConsola' => "PlayStation4",
        ]);
        DB::table('consola')->insert([
            'nombreConsola' => "PlayStation5",
        ]);
        DB::table('consola')->insert([
            'nombreConsola' => "Nintendo switch",
        ]);
        DB::table('consola')->insert([
            'nombreConsola' => "SeriesX",
        ]);
    }
}
