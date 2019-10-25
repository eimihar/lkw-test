<?php

namespace App\Models;

class CourseModel extends BaseModel
{
    protected $table = 'course';

    protected $fillable = ['name', 'intake_month', 'intake_year'];
}