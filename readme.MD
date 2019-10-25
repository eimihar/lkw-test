# Limkokwing test

## Introduction
Basically the project is divided into two ends, backend and frontend. The backend serves all the APIs calling, and 
the frontend serves purely the client end.

## Backend Set Up
*everything must be done in order*

- `cd backend` to change to this dir

#### Composer install  (compulsory)
- `composer install`

#### .env setup (compulsory)
- Copy `.env.example` to `.env`
- Create a database named `campus_db`
- Update database credentials accordingly in `.env`

#### artisan setup (compulsory)
- `php artisan migrate` to migrate the data
- `php artisan passport:install`
- `php artisan db:seed` to seed a ready oauth2 password grant and an admin you can log in with

### seeder (optional)
- `php artisan db:seed --class=FakeSeeder` to seed a sample records for courses, semesters and subjects
