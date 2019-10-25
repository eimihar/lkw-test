<?php

namespace App\Http\Controllers\Apis\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\SubjectMarkingRepository;
use App\Repositories\SubjectRepository;
use Illuminate\Http\Request;

class SubjectMarkingController extends Controller
{
    public function index(SubjectMarkingRepository $repository, SubjectRepository $subjectRepository, $subjectId)
    {
        return $repository->getMarking($subjectRepository->getById($subjectId));
    }

    public function store(SubjectMarkingRepository $repository, Request $request)
    {
        $repository->mark($request->post('markings'));
    }

    public function destroy()
    {
    }

    public function update()
    {
    }

    public function show()
    {
    }
}