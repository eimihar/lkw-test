<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseModel;
use App\Models\SemesterModel;
use App\Models\SubjectModel;
use App\Repositories\CourseRepository;
use App\Repositories\SemesterRepository;
use App\Repositories\SubjectRepository;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

class SubjectsController extends Controller
{
    public function __construct(Application $app, CourseRepository $courseRepository, SemesterRepository $semesterRepository)
    {
        $this->middleware(function(Request $request, $next) use ($app, $courseRepository, $semesterRepository) {
            $course = $courseRepository->getById((int) $request->route('courseId'));

            $semester = $semesterRepository->getQuery()
                ->where('id', (int) $request->route('semesterId'))
                ->where('course_id', $course->id)
                ->firstOrFail();

            $app->singleton(CourseModel::class, function() use ($course) {
                return $course;
            });

            $app->singleton(SemesterModel::class, function() use ($semester) {
                return $semester;
            });

            return $next($request);
        });
    }

    public function index(SubjectRepository $repository, SemesterModel $semester)
    {
        return $repository->getQuery()
            ->where('semester_id', $semester->id)
            ->get();
    }

    public function store(Request $request, SubjectRepository $repository)
    {
        $repository->add([
            'semester_id' => $request->route('semesterId'),
            'name' => $request->post('name'),
            'description' => $request->post('description')
        ]);
    }

    public function destroy(SemesterModel $semester, SubjectRepository $repository, $subjectId)
    {
        $repository->getQuery()->where([
            'id' => $subjectId,
            'semester_id' => $semester->id
        ])->delete();
    }

    public function update(SemesterModel $semester, SubjectRepository $repository, $subjectId, Request $request)
    {
        return $repository->getQuery()->where([
            'id' => $subjectId,
            'semester_id' => $semester->id
        ])->update($request->all(['name']));
    }

    public function show(SemesterModel $semester, SubjectRepository $repository, $subjectId)
    {
        return $repository->getQuery()->where([
            'id' => $subjectId,
            'semester_id' => $semester->id
        ])->firstOrFail();
    }
}