<?php

namespace App\Repositories;

use App\Contracts\ResourceRepository;
use App\Contracts\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class UserRepository extends BaseRepository
{
    public function model()
    {
        return User::class;
    }

    /**
     * @param Role $role
     * @param callable $filter
     * @return Collection
     */
    public function getByRole(Role $role, callable $filter = null)
    {
        $query = $this->getQuery();

        if ($filter)
            $filter($query);

        return $this->getQuery()->where('role', $role->name())->get();
    }
}