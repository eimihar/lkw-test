<?php

namespace App\Entities\Roles;

use App\Contracts\Role;

class StudentRole implements Role
{
    /**
     * @return string
     */
    public function name()
    {
        return 'student';
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
        return [Role::PERMISSION_VIEW];
    }
}