<?php

namespace App\Repositories;

use App\Models\AdminModel;

class AdminRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return AdminModel::class;
    }

    /**
     * @param $email
     * @param int $password
     * @return AdminModel
     */
    public function create($email, $password = 12345)
    {
        $user = (new UserRepository())->add([
            'email' => $email,
            'password' => $password
        ]);

        $admin = $this->add([
            'user_id' => $user->id
        ]);

        return $admin;
    }
}