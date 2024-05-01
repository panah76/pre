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
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', AboutController::class)->name('about');

Route::get('/contact',[ContactController::class , 'index'])->name('contact');
Route::post('/contact',[ContactController::class , 'store'])->name('contact_post');

Route::get('/course',[CourseController::class , 'index']);
Route::post('/course',[CourseController::class , 'store']);
Route::get('/single_course/{$slug}',[CourseController::class , 'show']);

Route::prefix('auth')->group(function () {
    Route::get('/forget_password', function () {
       return view('auth.forget_password');
    });
//    Route::get('/login', function () {
//        return view('auth.login');
//    });
    Route::get('/register', function () {
        return view('auth.register');
    })->name('register');

});

Route::get('posts/{post:slug}', [PostController::class, 'show']);
Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('register', [UserController::class, 'store'])->middleware('guest');

Route::get('register', [UserController::class, 'create'])->middleware('guest');
Route::post('logout', [SessionController::class, 'destroy'])->middleware('auth');
Route::get('login', [UserController::class, 'login'])->middleware('guest');
Route::post('login', [UserController::class, 'check'])->middleware('guest');



