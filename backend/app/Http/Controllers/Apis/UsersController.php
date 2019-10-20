<?php

namespace App\Http\Controllers\Apis;

use App\Factories\RoleFactory;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    /**
     * @var RoleFactory
     */
    private $roleFactory;

    public function __construct(UserRepository $userRepository, RoleFactory $roleFactory)
    {
        $this->userRepository = $userRepository;
        $this->roleFactory = $roleFactory;
    }

    public function index($role)
    {
        return $this->userRepository->getByRole($this->roleFactory->create($role), function(Builder $query) {
            return $query->limit(10);
        });
    }

    public function store($role, Request $request)
    {
        $role = $this->roleFactory->create($role);

        $user = new User();

        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->role = $role;

        $this->userRepository->add($user);
    }

    public function show()
    {
    }

    public function update()
    {
    }

    public function destroy()
    {
    }
}