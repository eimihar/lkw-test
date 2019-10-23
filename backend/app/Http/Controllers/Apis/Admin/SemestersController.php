<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseModel;
use App\Repositories\CourseRepository;
use App\Repositories\SemesterRepository;
use App\Repositories\SubjectRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class SemestersController extends Controller
{
    public function __construct(Application $app, CourseRepository $courseRepository)
    {
        $this->middleware(function(Request $request, $next) use ($app, $courseRepository) {
            $course = $courseRepository->getById((int) $request->route('courseId'));

            $app->singleton(CourseModel::class, function() use ($course) {
                return $course;
            });

            return $next($request);
        });
    }

    public function index(SemesterRepository $repository, CourseModel $course, SubjectRepository $subjectRepository)
    {
        $result = $repository->getQuery()
            ->where('course_id', $course->id)
            ->get();

        $response = [];

        /** @var Model $semester */
        foreach ($result as $semester) {
            $totalSubj = $subjectRepository->getQuery()
                ->where('semester_id', $semester->id)
                ->count();

            $response[] = array_merge($semester->toArray(), ['total_subjects' => $totalSubj]);
        }

        return $response;
    }

    public function store(Request $request, SemesterRepository $repository, CourseModel $course)
    {
        $repository->add([
            'course_id' => $course->id,
            'no' => $request->post('no')
        ]);
    }

    public function destroy(CourseModel $courseModel, SemesterRepository $repository, $semesterId)
    {
        $repository->getQuery()->where('course_id', $courseModel->id)->where('id', $semesterId)->delete();
    }

    /*public function update($course, SemesterRepository $repository, Request $request)
    {
        $repository->update($course, $request->all(['name']));
    }*/

    public function show(CourseModel $courseModel, SemesterRepository $repository, $semesterId)
    {
        return $repository->getQuery()
            ->where('course_id', $courseModel->id)
            ->where('id', $semesterId)
            ->firstOrFail();
    }
}