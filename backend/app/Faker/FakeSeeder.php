<?php

namespace App\Faker;

use App\Models\CourseModel;
use App\Models\SemesterModel;
use App\Models\SubjectModel;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FakeSeeder extends Seeder
{
    public function run()
    {
        $courseFaker = new CourseFaker();
        $subjectFaker = new SubjectFaker();

        foreach (range(0, 3) as $index) {
            $course = CourseModel::create([
                'name' => $courseFaker->courseName()
            ]);

            foreach (range(1, $courseFaker->totalSemester()) as $no) {
                $semester = SemesterModel::create([
                    'course_id' => $course->id,
                    'no' => $no
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