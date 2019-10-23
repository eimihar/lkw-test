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

    /**
     * @param $id
     * @return Model
     */
    public function getById($id);

    /**
     * @param array $data
     * @return Model
     */
    public function add(array $data);

    public function delete(Model $model);

    public function save(Model $model);
}