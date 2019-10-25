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
        return range(5, 7)[$this->getDistributedIndex('total_semester', 3)];
    }

    public function totalSubjects()
    {
        return range(4, 6)[$this->getDistributedIndex('total_subjects', 3)];
    }

    public function intakeMonth()
    {
        return range(1, 12)[$this->getDistributedIndex('intake_month', 12)];
    }

    public function intakeYear()
    {
        return range(2019, 2020)[$this->getDistributedIndex('intake_year', 2)];
    }
}