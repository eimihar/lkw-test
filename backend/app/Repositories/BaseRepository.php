<?php

namespace App\Repositories;

use App\Contracts\Repository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository implements Repository
{
    /**
     * @var Builder
     */
    private $baseQuery;

    public function __construct()
    {
        $this->baseQuery = $this->model()::query();
    }

    /**
     * @param Model $name
     * @return static
     */
    public static function createFromModel($name)
    {
        return new static($name::query());
    }

    public function getQuery()
    {
        return clone $this->baseQuery;
    }

    public function add(array $data)
    {
        return $this->model()::create($data);
    }

    public function getById($id)
    {
        return $this->getQuery()->where('id', $id)->firstOrFail();
    }

    public function update($id, array $data)
    {
        $this->getById($id)->fill($data);
    }

    public function all()
    {
        return $this->getQuery()->get();
    }

    public function delete(Model $model)
    {
        $model->delete();
    }

    public function save(Model $model)
    {
        $model->save();
    }
}