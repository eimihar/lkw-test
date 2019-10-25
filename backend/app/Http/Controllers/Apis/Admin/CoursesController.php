<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseModel;
use App\Repositories\CourseRepository;
use App\Repositories\SemesterRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CoursesController extends Controller
{
    public function index(CourseRepository $repository)
    {
        return $repository->allWithTotalStudents();
    }

    public function store(Request $request, CourseRepository $repository, SemesterRepository $semesterRepository)
    {
        $course = $repository->add($request->all(['name', 'intake_month', 'intake_year']));

        $month = $request->post('intake_month');
        $year = $request->post('intake_year');

        foreach (range(1, $request->post('total_semesters')) as $no) {
            $next = date('Y-n', strtotime('+6 months', strtotime($year . '-' . $month . '-01')));

            list($year, $month) = explode('-', $next);

            $semesterRepository->add([
                'course_id' => $course->id,
                'no' => $no,
                'year' => $year,
                'month' => $month
            ]);
        }
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