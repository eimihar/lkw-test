<?php

namespace App\Http\Controllers\Apis\Student;

use App\Http\Controllers\Controller;
use App\Repositories\SemesterRepository;

class SubjectController extends Controller
{
    public function index(SemesterRepository $repository, $semesterId)
    {
        return $repository->getById($semesterId)->subjects;
    }
}