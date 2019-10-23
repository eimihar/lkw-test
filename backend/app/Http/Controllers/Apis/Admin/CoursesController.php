<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseModel;
use App\Repositories\CourseRepository;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    public function index(CourseRepository $repository)
    {
        return $repository->all();
    }

    public function store(Request $request, CourseRepository $repository)
    {
        $repository->add($request->all(['name']));
    }

    public function destroy($courseId, CourseRepository $repository)
    {
        $course = $repository->getById($courseId);

        $repository->delete($course);
    }

    public function update($courseId, CourseRepository $repository, Request $request)
    {
        $repository->update($courseId, $request->all(['name']));
    }

    public function show($courseId, CourseRepository $repository)
    {
        return $repository->getById($courseId);
    }
}