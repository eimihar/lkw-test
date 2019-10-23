<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Apis\Admin\SubjectsController;

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

Route::middleware([/*'auth:api', */\App\Http\Middleware\ApiResponse::class, 'cors'])->group(function () {
    // validate student
    Route::get('/me', \App\Http\Controllers\Apis\UserController::class . '@me');

    /**
     * STUDENT APIS ROUTES
     */
    Route::middleware(function($request, $next) {
        return $next($request);
    })->prefix('student')->group(function() {
    });

    /**
     * ADMIN APIS ROUTES
     */
    Route::middleware(function($request, $next) {
        return $next($request);
    })->prefix('admin')->group(function() {
        Route::apiResource('courses', \App\Http\Controllers\Apis\Admin\CoursesController::class)->parameter('courses', 'courseId');
        Route::apiResource('courses/{courseId}/students', \App\Http\Controllers\Apis\Admin\CourseStudentsController::class)->parameter('students', 'studentId');
        Route::apiResource('courses/{courseId}/semesters', \App\Http\Controllers\Apis\Admin\SemestersController::class)->parameter('semesters', 'semesterId');
        Route::apiResource('courses/{courseId}/semesters/{semesterId}/subjects', SubjectsController::class)->parameter('subjects', 'subjectId');
    });
//    Route::apiResource('', 'Apis\\UsersController')->parameter('', 'user');
});
