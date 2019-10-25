<?php

namespace App\Models;

use App\User;

class StudentModel extends BaseModel
{
    protected $table = 'student';

    protected $fillable = ['course_id', 'user_id'];

    public function course()
    {
        return $this->hasOne(CourseModel::class, 'id', 'course_id');
    }

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}