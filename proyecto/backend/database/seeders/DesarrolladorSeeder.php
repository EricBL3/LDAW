<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DesarrolladorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "Activision",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "343 Industries",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "havok",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "RockStar games",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "From Software",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "Visceral",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "Bethesda",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "Crytek",
        ]);
        DB::table('desarrollador')->insert([
            'nombreDesarrollador' => "Frostbite",
        ]);
    }
}
