<?php

namespace App\Seeders;

use App\Models\CourseModel;
use App\Models\SemesterModel;
use App\Models\SubjectModel;
use App\Repositories\AdminRepository;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    public function run()
    {
        (new AdminRepository())->create('admin@limkokwing.net', 12345);
    }
}
