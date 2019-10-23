<?php

namespace App\Repositories;

use App\Models\SubjectModel;

class SubjectRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return SubjectModel::class;
    }
}