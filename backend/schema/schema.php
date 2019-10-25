<?php
use \App\ActiveSchema\Table;

define('LARAVEL_START', microtime(true));

require __DIR__ . '/../vendor/autoload.php';

/** @var \Illuminate\Foundation\Application $app */
$app = require_once __DIR__ . '/../bootstrap/app.php';

$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

$kernel->bootstrap();

$schema = new \App\ActiveSchema\Schema($app->get('db')->connection());

$schema->table('user', function (Table $table) {
    $table->bigIncrements('id');
    $table->string('full_name');
//    $table->nullableTimestamp('email_verified_at');
    $table->string('email');
    $table->dateTime('birth_date');
    $table->string('password');
    $table->string('gender', 10);
//    $table->rememberToken();
    $table->nullableTimestamps();
    $table->unique('email');
});

$schema->table('course', function (Table $table) {
    $table->increments('id');
    $table->string('name');
    $table->integer('intake_month');
    $table->integer('intake_year');
    $table->nullableTimestamps();
});

$schema->table('semester', function (Table $table) {
    $table->increments('id');
    $table->integer('course_id');
    $table->integer('no');
    $table->integer('month');
    $table->integer('year');
    $table->nullableTimestamps();
});

$schema->table('subject', function (Table $table) {
    $table->increments('id');
    $table->integer('semester_id');
    $table->string('name');
    $table->text('description');
    $table->nullableTimestamps();
});

$schema->table('student', function (Table $table) {
    $table->increments('id');
    $table->integer('user_id');
    $table->integer('course_id');
    $table->nullableTimestamps();
});

$schema->table('subject_marking', function (Table $table) {
    $table->increments('id');
    $table->integer('subject_id');
    $table->integer('student_id');
    $table->decimal('score');
    $table->boolean('is_marked');
    $table->nullableTimestamps();
});