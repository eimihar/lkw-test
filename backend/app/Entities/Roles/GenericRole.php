<?php

namespace App\Entities\Roles;

use App\Contracts\Role;

class GenericRole implements Role
{
    /**
     * @var string $name
     */
    protected $name;

    /**
     * @var string[] $allowed
     */
    protected $allowed;

    public function __construct($name, array $allowed)
    {
        $this->name = $name;
        $this->allowed = $allowed;
    }

    /**
     * @return string
     */
    public function name()
    {
        return $this->name;
    }

    /**
     * @param string $permission
     * @return boolean
     */
    public function can($permission)
    {
        return in_array($permission, $this->allowed);
    }

    /**
     * @return string[]
     */
    public function getPermissions()
    {
        return $this->allowed;
    }
}