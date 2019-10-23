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
}