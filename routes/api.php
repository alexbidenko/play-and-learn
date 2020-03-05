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

Route::get('examinations', 'RedactionController@examinations');
Route::get('subjects', 'RedactionController@subjects');
Route::get('levels', 'RedactionController@levels');
Route::get('tasks', 'RedactionController@tasks');

Route::get('game/subjects-by-examination/{examinationId}', 'GameController@subjectsByExamination');
Route::get('game/levels-by-subject/{subjectId}', 'GameController@levelsBySubject');

Route::get('subjects-by-examination/{examinationId}', 'RedactionController@subjectsByExamination');
Route::get('levels-by-subject/{subjectId}', 'RedactionController@levelsBySubject');
Route::get('tasks-by-level/{levelId}', 'RedactionController@tasksByLevel');

Route::get('levels-by-examination/{examinationId}', 'RedactionController@levelsByExamination');
Route::get('tasks-by-subject/{subjectId}', 'RedactionController@tasksBySubject');
Route::get('tasks-by-examination/{examinationId}', 'RedactionController@tasksByExamination');

Route::middleware('auth:api')->group(function () {

    Route::get('user', 'PassportController@details');

    Route::post('examinations', 'RedactionController@addExamination');
    Route::post('subjects', 'RedactionController@addSubject');
    Route::post('levels', 'RedactionController@addLevel');
    Route::post('tasks', 'RedactionController@addTask');

    Route::post('examinations/{id}', 'RedactionController@updateExamination');
    Route::post('subjects/{id}', 'RedactionController@updateSubject');
    Route::post('levels/{id}', 'RedactionController@updateLevel');
    Route::post('tasks/{id}', 'RedactionController@updateTask');

    Route::delete('examinations/{id}', 'RedactionController@deleteExamination');
    Route::delete('subjects/{id}', 'RedactionController@deleteSubject');
    Route::delete('levels/{id}', 'RedactionController@deleteLevel');
    Route::delete('tasks/{id}', 'RedactionController@deleteTask');

    Route::post('statistic/results', 'StatisticController@addResults');
    Route::get('statistic/users', 'StatisticController@getUsersList');
});

