<?php

use App\Faker\CourseFaker;
use App\Faker\SubjectFaker;
use App\Models\CourseModel;
use App\Models\SemesterModel;
use App\Models\SubjectModel;
use Illuminate\Database\Seeder;

class FakeSeeder extends Seeder
{
    public function run()
    {
        $courseFaker = new CourseFaker();
        $subjectFaker = new SubjectFaker();

        foreach (range(0, 3) as $index) {
            $course = CourseModel::create([
                'name' => $courseFaker->courseName(),
                'intake_year' => $year = $courseFaker->intakeYear(),
                'intake_month' => $month = $courseFaker->intakeMonth()
            ]);

            foreach (range(1, $courseFaker->totalSemester()) as $no) {
                $next = date('Y-n', strtotime('+6 months', strtotime($year . '-' . $month . '-01')));

                list($year, $month) = explode('-', $next);

                $semester = SemesterModel::create([
                    'course_id' => $course->id,
                    'no' => $no,
                    'month' => $month,
                    'year' => $year
                ]);

                foreach (range(0, $courseFaker->totalSubjects() - 1) as $idx) {
                    $subject = SubjectModel::create([
                        'semester_id' => $semester->id,
                        'name' => $subjectFaker->name(),
                        'description' => ''
                    ]);
                }
            }
        }
    }
}