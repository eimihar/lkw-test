<?php

use App\Http\Controllers\Apis\Student\MarkingController;
use App\Http\Controllers\Apis\Student\SubjectController;
use App\Models\CourseModel;
use App\Models\StudentModel;
use App\Repositories\StudentRepository;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
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

Route::middleware(['auth:api', \App\Http\Middleware\ApiResponse::class, 'cors'])->group(function () {
    // validate student
    Route::get('/me', \App\Http\Controllers\Apis\UserController::class . '@me');

    /**
     * STUDENT APIS ROUTES
     */
    Route::middleware(function($request, $next) {
        // query authenticate user (or fail here) and make it available through all request under student APIs.
        $student = app()->make(StudentRepository::class)->byUserId(Auth::user()->id);

        app()->singleton(StudentModel::class, function() use ($student) {
            return $student;
        });

        return $next($request);
    })->prefix('student')->group(function() {
        Route::get('course', \App\Http\Controllers\Apis\Student\CourseController::class . '@show');
        Route::apiResource('course/semesters', \App\Http\Controllers\Apis\Student\SemesterController::class)->only(['index', 'show']);
        Route::apiResource('course/semesters/{semesterId}/subjects', SubjectController::class)->only(['index', 'show']);
        Route::get('marking/subjects/{semesterId}', MarkingController::class . '@subjects');
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
        Route::apiResource('marking/{subjectId}', \App\Http\Controllers\Apis\Admin\SubjectMarkingController::class)->only(['index', 'store']);
    });
//    Route::apiResource('', 'Apis\\UsersController')->parameter('', 'user');
});
