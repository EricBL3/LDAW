<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rol')->insert([
            'idRol' => 1,
            'nombreRol' => 'admin'
        ]);
        DB::table('rol')->insert([
            'idRol' => 2,
            'nombreRol' => 'general'
        ]);
    }
}
