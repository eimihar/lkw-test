<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function me(UserRepository $repository)
    {
        return $repository->getQuery()
            ->where('id', Auth::user()->id)
            ->with(['student', 'admin'])
            ->firstOrFail();
    }
}