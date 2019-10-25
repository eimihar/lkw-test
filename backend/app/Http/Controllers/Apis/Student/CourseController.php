<?php

namespace App\Http\Controllers\Apis\Student;

use App\Http\Controllers\Controller;
use App\Models\StudentModel;
use App\Repositories\CourseRepository;

class CourseController extends Controller
{
    public function show(StudentModel $student)
    {
        return $student->course;
    }
}