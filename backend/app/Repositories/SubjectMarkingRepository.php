<?php

namespace App\Repositories;

use App\Models\StudentModel;
use App\Models\SubjectMarkingModel;
use App\Models\SubjectModel;

class SubjectMarkingRepository extends BaseRepository
{
    /**
     * Name of the model
     * @return string
     */
    public function model()
    {
        return SubjectMarkingModel::class;
    }

    /**
     * @param $subjectId
     * @return SubjectMarkingModel[]
     */
    public function getMarking(SubjectModel $subject)
    {
        $markings = [];

        $students = StudentModel::query()->where('course_id', $subject->semester->course_id)->get();

        foreach ($students as $student) {
            $marking = $this->getQuery()->where('subject_id', $subject->id)->where('student_id', $student->id)->first();

            if (!$marking)
                $marking = SubjectMarkingModel::create([
                    'subject_id' => $subject->id,
                    'student_id' => $student->id,
                    'score' => 0,
                    'is_marked' => 0
                ]);

            $markings[] = $marking;
        }

        return $this->getQuery()->with(['student.user'])->where('subject_id', $subject->id)->get();
    }

    /**
     * @param array $markings
     */
    public function mark(array $markings)
    {
        foreach ($markings as $marking) {
            $this->getQuery()
                ->where('id', $marking['id'])
                ->update([
                    'score' => $marking['score']
                ]);
        }
    }
}