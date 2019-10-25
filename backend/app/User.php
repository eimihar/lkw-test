<?php

namespace App;

use App\Contracts\Permission;
use App\Models\AdminModel;
use App\Models\StudentModel;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    const GENDER_MALE = 'male';
    const GENDER_FEMALE = 'female';
    const GENDER_NON_BINARY = 'non_binary';

    protected $table = 'user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'full_name', 'email', 'password', 'birth_date', 'gender'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'remember_token', 'password'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function role()
    {
    }

    /**
     * Validate the password of the user for the Passport password grant.
     *
     * @param  string $password
     * @return bool
     */
    public function validateForPassportPasswordGrant($password)
    {
        return Hash::check($password, $this->password);
    }

//    public function findForPassport($username) {
//        return $this->where('username', $username)->first();
//    }

    public function student()
    {
        return $this->hasOne(StudentModel::class, 'user_id', 'id');
    }

    public function admin()
    {
        return $this->hasOne(AdminModel::class, 'user_id', 'id');
    }
}
