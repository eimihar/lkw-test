<?php

namespace App\Repositories;

use App\Contracts\ResourceRepository;
use App\Contracts\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;

class UserRepository extends BaseRepository
{
    public function model()
    {
        return User::class;
    }

    public function isExist($email)
    {
        return User::where('email', $email)->first() ? true : false;
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

    public function add(array $data)
    {
        $user = new User();

        if (!$data['password'])
            $data['password'] = Hash::make(12345);

        foreach ($data as $key => $value) {
            $user->$key = $value;
        }

        $user->save();

        return $user;
    }
}