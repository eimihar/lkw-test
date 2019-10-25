<?php

namespace App\Http\Controllers\Apis\Student;

use App\Http\Controllers\Controller;
use App\Models\StudentModel;
use App\Repositories\SemesterRepository;

class SemesterController extends Controller
{
    public function index(StudentModel $student)
    {
        return $student->course->semesters;
    }
}