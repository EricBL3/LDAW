<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class EliminarCuentaTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $id = DB::table('cuenta')->select('id')->latest()->limit(1)->get();
        $response = $this->deleteJson('/api/cuentas/'.$id[0]->id, []);

        $response->assertStatus(200);
    }
}
