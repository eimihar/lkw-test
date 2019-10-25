<?php

namespace App\Repositories;

use App\Models\SemesterModel;
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
     * @param SemesterModel $semester
     * @param StudentModel $student
     * @return StudentModel
     */
    public function forStudent(SemesterModel $semester, StudentModel $student)
    {
        $ids = [];

        foreach ($semester->subjects as $subject) {
            $ids[] = $subject->id;

            $marking = $this->getQuery()
                ->where('subject_id', $subject->id)
                ->where('student_id', $student->id)
                ->first();

            if (!$marking) {
                SubjectMarkingModel::create([
                    'subject_id' => $subject->id,
                    'student_id' => $student->id,
                    'score' => 0,
                    'is_marked' => 0
                ]);
            }
        }

        return $this->getQuery()
            ->with(['subject'])
            ->whereIn('subject_id', $ids)
            ->where('student_id', $student->id)
            ->get();
    }

    /**
     * @param $subjectId
     * @return SubjectMarkingModel[]
     */
    public function forSubject(SubjectModel $subject)
    {
        $students = StudentModel::query()->where('course_id', $subject->semester->course_id)->get();

        foreach ($students as $student) {
            $marking = $this->getQuery()->where('subject_id', $subject->id)->where('student_id', $student->id)->first();

            if (!$marking)
                SubjectMarkingModel::create([
                    'subject_id' => $subject->id,
                    'student_id' => $student->id,
                    'score' => 0,
                    'is_marked' => 0
                ]);
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