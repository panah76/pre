<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\pages\HomeController;
use App\Http\Controllers\course\CourseController;
use App\Http\Controllers\pages\ContactController;
use App\Http\Controllers\pages\AboutController;
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
Route::get('/', [HomeController::class, 'index'])->name('index');

Route::get('/about', AboutController::class);

Route::get('/contact',[ContactController::class , 'index']);
Route::post('/contact',[ContactController::class , 'store']);

Route::get('/course',[CourseController::class , 'index']);
Route::post('/course',[CourseController::class , 'store']);
Route::get('/single_course/{@slug}',[CourseController::class , 'show']);

Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('register', [UserController::class, 'store'])->middleware('guest');

Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('logout', [SessionController::class, 'destroy'])->middleware('auth');
Route::get('login', [UserController::class, 'login'])->middleware('guest');
Route::post('login', [UserController::class, 'check'])->middleware('guest');
