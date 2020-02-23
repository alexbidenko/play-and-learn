<?php

use Illuminate\Http\Request;

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

Route::post('sign-in', 'PassportController@login');
Route::post('sign-up', 'PassportController@register');

Route::middleware('auth:api')->group(function () {

    Route::get('user', 'PassportController@details');

    Route::get('examinations', 'PassportController@examinations');
    Route::get('subjects', 'RedactionController@subjects');
    Route::get('levels', 'RedactionController@levels');
    Route::get('tasks', 'RedactionController@tasks');

    Route::post('examinations', 'RedactionController@addExamination');
    Route::post('subjects', 'RedactionController@addSubject');
    Route::post('levels', 'RedactionController@addLevel');
    Route::post('tasks', 'RedactionController@addTask');

    Route::put('examinations/{id}', 'RedactionController@updateExamination');
    Route::put('subjects/{id}', 'RedactionController@updateSubject');
    Route::put('levels/{id}', 'RedactionController@updateLevel');
    Route::put('tasks/{id}', 'RedactionController@updateTask');

    Route::delete('examinations/{id}', 'RedactionController@deleteExamination');
    Route::delete('subjects/{id}', 'RedactionController@deleteSubject');
    Route::delete('levels/{id}', 'RedactionController@deleteLevel');
    Route::delete('tasks/{id}', 'RedactionController@deleteTask');
});

