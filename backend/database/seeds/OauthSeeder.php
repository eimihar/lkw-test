<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OauthSeeder extends Seeder
{
    public function run()
    {
        DB::table('oauth_clients')
            ->insert([
                'name' => 'frontend-password-grant',
                'id' => 100,
                'secret' => 'YoxyoZsYF7wuPUDVbgtCrr7uIXkQN3hMkH4DusCc',
                'password_client' => 1,
                'revoked' => 0,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ]);
    }
}