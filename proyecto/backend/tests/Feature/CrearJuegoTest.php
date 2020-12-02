<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class CrearJuegoTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $faker = \Faker\Factory::create();
        $a = "/images/imagen";
        $b = $a . $faker->numberBetween($min = 1, $max =5);
        $c= $b. ".jpg";
        $id = 1;
        $response = $this->postJson('/api/juego/registrarJuego/'.$id, [
            'idTitulo' => $faker->numberBetween($min = 1, $max = 20),
            'condiciones' => $faker->colorName(),
            'pathImagen' => $c,
            'tituloRecibir1' => $faker->catchPhrase(),
            'tituloRecibir2' => $faker->catchPhrase(),
            'tituloRecibir3' => $faker->catchPhrase(),
        ]);
        $response->assertStatus(201)
        ->assertJson([
            'message' => 'Juego registrado con exito',
        ]);
    }
}
