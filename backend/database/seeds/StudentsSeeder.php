<?php

use App\Models\CourseModel;
use App\Repositories\StudentRepository;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Database\Seeder;

class StudentsSeeder extends Seeder
{
    public function run()
    {
        $userRepo = new UserRepository();
        $studentRepo = new StudentRepository();

        foreach (CourseModel::all() as $course) {
            foreach (range(1, rand(4, 6)) as $no) {
                $this->create($course->id, $userRepo, $studentRepo);
            }
        }
    }

    protected function create($courseId, UserRepository $userRepo, StudentRepository $studentRepo)
    {
        $faker = Faker\Factory::create();

        $user = $userRepo->add([
            'full_name' => $name = $faker->name,
            'email' => strtolower(explode(' ', str_replace('.', '', $name))[0]) . '_' . rand(1, 1000) . '@limkokwing.net',
            'birth_date' => $faker->date(),
            'gender' => [User::GENDER_FEMALE, User::GENDER_MALE, User::GENDER_NON_BINARY][rand(0, 2)],
            'password' => 12345
        ]);

        $studentRepo->add([
            'course_id' => $courseId,
            'user_id' => $user->id,
        ]);
    }
}