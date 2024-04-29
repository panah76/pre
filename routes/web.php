<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\PostController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('register', [UserController::class, 'store'])->middleware('guest');

Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('logout', [SessionController::class, 'destroy'])->middleware('auth');
Route::get('login', [UserController::class, 'login'])->middleware('guest');
Route::post('login', [UserController::class, 'check'])->middleware('guest');
