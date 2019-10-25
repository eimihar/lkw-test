<?php

namespace App\Repositories;

use App\Models\CourseModel;

class CourseRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return CourseModel::class;
    }

    public function allWithTotalStudents()
    {
        return $this->getQuery()
            ->join('student', 'student.course_id', '=', 'course.id', 'left')
            ->selectRaw('course.*, count(student.id) as total_students')
            ->groupBy('course.id')
            ->get();
    }
}