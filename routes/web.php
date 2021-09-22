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

// USAMOS UM MIDDLEWARE PARA BLOQUEAR AS ROTAS NO SANCTUM
Route::get('/users', function () {
    return \App\Models\User::all();
})->middleware('auth:sanctum');

