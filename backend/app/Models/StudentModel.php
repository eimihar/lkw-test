<?php

namespace App\Models;

class StudentModel extends BaseModel
{
    protected $table = 'student';

    public function course()
    {
        return $this->hasOne(CourseModel::class, 'course_id', 'id');
    }
}