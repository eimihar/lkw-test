<?php

namespace App\Repositories;

use App\Models\SemesterModel;

class SemesterRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return SemesterModel::class;
    }
}