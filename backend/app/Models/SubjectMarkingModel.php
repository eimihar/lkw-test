<?php

namespace App\Models;

class SubjectMarkingModel extends BaseModel
{
    protected $table = 'subject_marking';

    protected $fillable = ['student_id', 'subject_id', 'score', 'is_marked'];

    public function student()
    {
        return $this->hasOne(StudentModel::class, 'id', 'student_id');
    }

    public function subject()
    {
        return $this->hasOne(SubjectModel::class, 'id', 'subject_id');
    }
}