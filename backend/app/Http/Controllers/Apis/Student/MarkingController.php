<?php

namespace App\Http\Controllers\Apis\Student;

use App\Http\Controllers\Controller;
use App\Models\StudentModel;
use App\Repositories\SemesterRepository;
use App\Repositories\SubjectMarkingRepository;

class MarkingController extends Controller
{
    public function subjects(SubjectMarkingRepository $repository, SemesterRepository $semesterRepository, $semesterId, StudentModel $student)
    {
        return $repository->forStudent($semesterRepository->getById($semesterId), $student);
    }
}