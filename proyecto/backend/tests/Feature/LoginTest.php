<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->postJson('/api/auth/login', [
            'correoCuenta' => 'pruebageneral@gmail.com',
            'password' => 'general',
        ]);

        $response->assertStatus(200)
        ->assertJson([
            'token_type' => 'bearer',
        ]);
    }
}
