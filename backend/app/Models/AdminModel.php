<?php

namespace App\Models;

use App\User;

class AdminModel extends BaseModel
{
    protected $table = 'admin';

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->hasOne(User::class, 'user_id', 'id');
    }
}