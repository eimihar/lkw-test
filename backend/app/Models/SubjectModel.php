<?php

namespace App\Models;

class SubjectModel extends BaseModel
{
    protected $table = 'subject';

    protected $fillable = ['semester_id', 'name', 'description'];
}