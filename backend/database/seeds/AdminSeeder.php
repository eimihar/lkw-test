<?php

use App\Repositories\AdminRepository;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run()
    {
        (new AdminRepository())->create('admin@limkokwing.net', 12345);
    }
}
