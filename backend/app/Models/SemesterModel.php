<?php

namespace App\Models;

class SemesterModel extends BaseModel
{
    protected $table = 'semester';

    protected $fillable = ['course_id', 'no'];
}