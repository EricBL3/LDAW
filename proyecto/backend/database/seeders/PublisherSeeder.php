<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;

use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publisher')->insert([
            'nombrePublisher' => "Nintendo",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "2k",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Bungie",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Microsoft",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Activision Blizzard",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Electronic Arts",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Sony",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "SEGA",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Bioware",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Ubisoft",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Capcom",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Bandai Namco",
        ]);
        DB::table('publisher')->insert([
            'nombrePublisher' => "Mojang",
        ]);
    }
}
