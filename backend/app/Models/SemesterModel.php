<?php

namespace App\Models;

class SemesterModel extends BaseModel
{
    protected $table = 'semester';

    protected $fillable = ['course_id', 'no', 'month', 'year'];

    public function course()
    {
        return $this->hasOne(CourseModel::class, 'id', 'course_id');
    }

    public function subjects()
    {
        return $this->hasMany(SubjectModel::class, 'semester_id', 'id');
    }
}