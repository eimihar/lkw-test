<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\StudentRepository;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class CourseStudentsController extends Controller
{
    public function index(StudentRepository $repository, $courseId)
    {
        return $repository->getQuery()->where('course_id', $courseId)->get();
    }

    public function store(Request $request, UserRepository $userRepo, StudentRepository $studentRepo, $courseId)
    {
        $user = $userRepo->add($request->all(array_merge(['email', 'full_name', 'birth_date', 'gender'], ['password' => password_hash(12345, PASSWORD_DEFAULT)])));

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