<?php

namespace App\Contracts;

interface Role
{
    const ROLE_ADMIN = 'admin';
    const ROLE_STUDENT = 'student';

    const PERMISSION_VIEW = 'view';
    const PERMISSION_ADD = 'add';
    const PERMISSION_MODIFY = 'modify';
    const PERMISSION_DELETE = 'delete';

    /**
     * @return string
     */
    public function name();

    /**
     * @param string $permission
     * @return boolean
     */
    public function can($permission);

    /**
     * @return string[]
     */
    public function getPermissions();
}