<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegistrarCuentaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $faker = \Faker\Factory::create();

        $response = $this->postJson('/api/auth/register', [
            'idRol' => $faker->numberBetween($min = 1, $max = 2),
            'nombre' => $faker->name,
            'correoCuenta' => $faker->email,
            'telefonoCuenta' => '1234567890',
            'usuario' => $faker->username,
            'password' => 'test-registrar',
            'password_confirmation' => 'test-registrar'
        ]);

        $response->assertStatus(201)
        ->assertJson([
            'message' => 'Successfully registered',
        ]);
    }
}
