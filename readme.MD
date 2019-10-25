# Limkokwing test

## Introduction
Basically the project is divided into two ends, backend and frontend. The backend serves all the APIs calling, and 
the frontend serves purely the client end.

## Installation
- `git clone https://github.com/eimihar/lkw-test`
- `cd lkw-test`

## Backend Set Up
*everything must be done in order*

- `cd backend` to change to this dir

#### Composer install  (compulsory)
- `composer install`

#### .env setup (compulsory)
- `cp .env.example .env`
- Create a database named `campus_db`
- Update database credentials accordingly in `.env`

#### generate key (compulsory)
- `php artisan key:generate`
- `php artisan config:cache`

#### artisan setup (compulsory)
- `php artisan migrate` to migrate the tables
- `php artisan passport:install`
- `php artisan db:seed` to seed a default oauth2 password grant for frontend app and an admin you can log in with

### seeder (optional)
use this seeders to skip adding records
- `php artisan db:seed --class=CoursesSeeder` to seed a sample records for courses, semesters and subjects
- `php artisan db:seed --class=StudentsSeeder` to seed a sample records of students of existing courses

## Usage

## Serving the backend
From the root directory
```
cd backend
php artisan serve --port=8081
```
*make sure it's served at port 8081*

## serving the html
For the frontend app you can try the committed build without using the npm at all (if you've not installed one)

From the root directory of the project,
- `cd frontend/dist`
- `php -S localhost:8080`

#### testing the app
##### testing admin
- on the browser, type `http://localhost:8081`
- login with `admin@limkokwing.net` with password `12345`

##### testing students
- select any of the student emails when you're still logged into the admin
- logout, then login again with the student email with password `12345`


## Things I have not done (due to time constraints)
- pdf reports
- validations for most of them
  - so if you input a wrong password it'll not tell you unless you inspect element.
- frontend logged in routes auth
- loaders for all over the places