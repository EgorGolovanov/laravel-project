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


Auth::routes();

Route::get('/', 'ListsController@index')->name('lists');

Route::post('/', 'ListsController@add')->name('add-form');

Route::get('/users/account', 'AccountController@index')->name('account');

Route::post('/{id}', 'ListsController@edit')->name('edit');

Route::get('/{id}', 'ListsController@delete')->name('delete');

Route::get('/home', 'HomeController@index')->name('home');
