<?php

namespace App\Factories;

use App\Contracts\Role;
use App\Entities\Roles\AdminRole;
use App\Entities\Roles\StudentRole;

class RoleFactory
{
    /**
     * @var Role[]
     */
    protected $roles = array();

    public function __construct()
    {
        $this->roles = [
            new AdminRole(),
            new StudentRole()
        ];
    }

    public function create($from)
    {
        foreach ($this->roles as $role)
            if ($role->name() == $from)
                return clone $role;

        throw new \Exception('Invalid role [' . $from . '].');
    }
}