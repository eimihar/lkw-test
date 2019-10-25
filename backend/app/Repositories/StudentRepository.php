<?php

namespace App\Repositories;

use App\Models\StudentModel;

class StudentRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return StudentModel::class;
    }

    public function byUserId($id)
    {
        return $this->getQuery()->where('user_id', $id)
            ->firstOrFail();
    }
}