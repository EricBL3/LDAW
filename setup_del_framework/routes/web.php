<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ericb', function () {
    echo json_encode(["message"=>"Eric B"]);
});

Route::get('/jan', function () {
    echo json_encode(["message"=>"Jan"]);
});

Route::get('/erict', function () {
    echo json_encode(["message"=>"Eric T"]);
});