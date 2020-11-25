<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class ModificarCuentaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $faker = \Faker\Factory::create();
        $id = DB::table('cuenta')->select('id')->latest()->limit(2)->get();
        
        $response = $this->putJson('/api/cuentas/'.$id[0]->id, [
            'idRol' =>  $faker->numberBetween($min = 1, $max = 2),
            'nombre' => ($faker->name)."editado",
            'correoCuenta' => $faker->email,
            'telefonoCuenta' =>  '0987654321',
            'usuario' =>  $faker->username,
            'password' => 'test-editar',
            'password_confirmation' => 'test-editar'
        ]);

        $response->assertStatus(200);

        $response = $this->putJson('/api/cuentas/'.$id[1]->id, [
            'idRol' =>  $faker->numberBetween($min = 1, $max = 2),
            'nombre' => ($faker->name)."editado sin contraseña",
            'correoCuenta' => $faker->email,
            'telefonoCuenta' =>  '0987654321',
            'usuario' =>  $faker->username,
        ]);

        $response->assertStatus(200);
    }
}
