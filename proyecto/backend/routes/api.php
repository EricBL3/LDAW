<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTAuthController;
use App\Http\Controllers\TituloController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\PublisherController;
use App\Http\Controllers\DesarrolladorController;
use App\Http\Controllers\ConsolaController;
use App\Http\Controllers\JuegoController;
use App\Http\Controllers\OfertaController;
use App\Http\Controllers\CuentaController;
use App\Http\Controllers\EmailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('register', [JWTAuthController::class, 'register']);
    Route::post('login', [JWTAuthController::class, 'login']);
    Route::post('logout', [JWTAuthController::class, 'logout']);
    Route::post('refresh', [JWTAuthController::class, 'refresh']);
    Route::get('profile', [JWTAuthController::class, 'profile']);
});
//Route::resource('titulo',TituloController::class);
Route::group([
    'middleware' => 'api',
    'prefix' => 'titulo'
], function ($router){
    Route::get('getTitulo/{titulo?}', [TituloController::class, 'getTitulo']);
    Route::get('getData', [TituloController::class, 'getData']);
    Route::get('mostrarTitulo/{idTitulo}', [TituloController::class, 'mostrarTitulo']);

});
Route::group([
    'middleware' => 'api',
    'prefix' => 'juego'
], function ($router){
    Route::get('listarJuegos/{idTitulo}', [JuegoController::class, 'listarJuegos']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'genero'
], function ($router){
    Route::get('getGenero', [GeneroController::class, 'getGenero']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'consola'
], function ($router){
    Route::get('getConsola', [ConsolaController::class, 'getConsola']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'publisher'
], function ($router){
    Route::get('getPublisher', [PublisherController::class, 'getPublisher']);
});
Route::group([
    'middleware' => 'api',
    'prefix' => 'desarrollador'
], function ($router){
    Route::get('getDesarrollador', [DesarrolladorController::class, 'getDesarrollador']);
});

Route::resource('ofertas', OfertaController::class);
Route::resource('cuentas', CuentaController::class);

Route::get("send-email/{email}", [EmailController::class, "sendEmail"]);