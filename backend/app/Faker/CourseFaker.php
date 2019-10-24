<?php

namespace App\Faker;

class CourseFaker extends BaseFaker
{
    protected $level = ['Diploma', 'Degree', 'PhD'];

    protected $courses = [
        'Chemical Engineering',
        'Civil Engineering',
        'Electrical Engineering',
        'Environmental Health'
    ];

    public function courseName()
    {
        return $this->getDistributedElement('level') . ' in ' . $this->getDistributedElement('courses');
    }

    public function totalSemester()
    {
        return [5, 6, 7][$this->getDistributedIndex('total_semester', 3)];
    }

    public function totalSubjects()
    {
        return [4, 5, 6][$this->getDistributedIndex('total_subjects', 3)];
    }
}