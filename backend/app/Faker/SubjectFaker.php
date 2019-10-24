<?php

namespace App\Faker;

use Faker\Provider\Base;

class SubjectFaker extends BaseFaker
{
    protected $subjects = [
        'Molecular and Materials Science',
        'Principles of Inorganic Chemistry',
        'Principles of Organometallic Chemistry',
        'Crystal Structure Analysis',
        'Principles of Chemical Science',
        'Chemistry Laboratory Techniques',
        'Ethics for Engineers',
        'Metakaryotic Biology and Epidemiology',
        'Laboratory Fundamentals in Biological Engineering',
        'Biological Circuit Engineering Laboratory',
        'Neurotechnology in Action'
        ];

    public function name()
    {
        return $this->getDistributedElement('subjects');
    }
}