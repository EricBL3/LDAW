<?php

namespace Database\Factories;

use App\Models\Titulo;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class TituloFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = \App\Models\Titulo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = Faker::create();
        $a = "/images/imagen";
        $b = $a . $faker->numberBetween($min = 1, $max =5);
        $c= $b. ".jpg";
        return [
            'nombreTitulo' => $faker->catchPhrase(),
            'idGenero' => $faker-> numberBetween($min = 1, $max = 7),
            'idPublisher' => $faker-> numberBetween($min = 1, $max = 13),
            'idConsola' =>  $faker->numberBetween($min = 1, $max = 6),
            'idDesarrollador' => $faker-> numberBetween($min = 1, $max = 9),
            'edicion' => $faker->colorName(),
            'version' => $faker->colorName() ,
            'fechaLanzamiento' => $faker->date($format = 'Y-m-d', $max = 'now'),
            'urlImagen' => $c,
        ];
    }
}
