<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegistrarOfertaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $faker = \Faker\Factory::create();

        $response = $this->postJson('/api/ofertas', [
            "idCuentaEnviar" => 1,
            "idCuentaRecibir"=> 3,
            "idJuegoPorEnviar" => 2,
            "idJuegoPorRecibir" => 1,
            "estado" => "pendiente"
        ]);

        $response->assertStatus(201);
    }
}
