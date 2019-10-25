<?php

namespace App\Models;

class SubjectModel extends BaseModel
{
    protected $table = 'subject';

    protected $fillable = ['semester_id', 'name', 'description'];

    public function semester()
    {
        return $this->hasOne(SemesterModel::class, 'id', 'semester_id');
    }
}