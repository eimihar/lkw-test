<?php

namespace App\Entities\Roles;

use App\Contracts\Permission;
use App\Contracts\Role;

class AdminRole implements Role
{
    /**
     * @return string
     */
    public function name()
    {
        return 'admin';
    }

    /**
     * @param string $permission
     * @return boolean
     */
    public function can($permission)
    {
        return in_array($permission, $this->getPermissions());
    }

    /**
     * @return string[]
     */
    public function getPermissions()
    {
        return [
            Role::PERMISSION_ADD,
            Role::PERMISSION_DELETE,
            Role::PERMISSION_MODIFY
        ];
    }
}