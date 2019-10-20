<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;

class StudentsController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index()
    {
    }
}