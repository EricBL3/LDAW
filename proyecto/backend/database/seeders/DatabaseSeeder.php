<?php

namespace Database\Seeders;

use App\Models\Publisher;
use App\Models\Titulo;
use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ConsolaSeeder::class,
            GeneroSeeder::class,
            PublisherSeeder::class,
            DesarrolladorSeeder::class,
            RolSeeder::class
        ]);
        Titulo::factory()->count(20)->create();
    }
}
