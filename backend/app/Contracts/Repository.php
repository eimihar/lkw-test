<?php

namespace App\Contracts;

use Illuminate\Database\Eloquent\Model;

interface Repository
{
    /**
     * Name of the model
     * @return string
     */
    public function model();

    public function all();

    public function getById($id);

    public function add(Model $model);

    public function delete(Model $model);

    public function save(Model $model);
}