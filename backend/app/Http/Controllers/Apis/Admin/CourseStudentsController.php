<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Exceptions\ApiUserException;
use App\Http\Controllers\Controller;
use App\Repositories\StudentRepository;
use App\Repositories\UserRepository;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class CourseStudentsController extends Controller
{
    public function index(StudentRepository $repository, $courseId)
    {
        return $repository->getQuery()
            ->with(['user'])
            ->where('course_id', $courseId)->get();
    }

    public function store(Request $request, UserRepository $userRepo, StudentRepository $studentRepo, $courseId)
    {
        if ($userRepo->isExist($request->post('email')))
            throw new ApiUserException('Email already exist');

        $user = $userRepo->add($request->all(array_merge(['email', 'full_name', 'birth_date', 'gender'], ['password' => $request->post('password', 12345)])));

        $studentRepo->add([
            'course_id' => $courseId,
            'user_id' => $user->id,
        ]);
    }

    public function update(StudentRepository $studentRepo, $courseId, $studentId)
    {
        $student = $studentRepo->getQuery()->where(['course_id' => $courseId, 'student_id' => $studentId]);

        return $student;
    }

    public function destroy()
    {
    }
}