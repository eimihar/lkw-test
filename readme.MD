# Limkokwing test

## 1. Introduction
Basically the project is divided into two ends, backend and frontend. The backend serves all the APIs calling, and 
the frontend serves purely the client end.

## 2. Installation
- `git clone https://github.com/eimihar/lkw-test`
- `cd lkw-test`

## 3. Backend Set Up
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

## 4. Usage

## Serving the backend
From the root directory
```
cd backend
php artisan serve --port=8081
```
*make sure it's served at port 8081*

## serving the frontend
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
- frontend logged in routes auth check
- loaders for all over the places
- edit/delete students, course, semester, subject

# Some examples
## Admin
![image](https://user-images.githubusercontent.com/5824953/67579867-e401c180-f777-11e9-999d-947543f4be14.png)
![image](https://user-images.githubusercontent.com/5824953/67580774-7b1b4900-f779-11e9-942c-ca557542e0fc.png)
![image](https://user-images.githubusercontent.com/5824953/67580800-82425700-f779-11e9-9b6c-3d2cc5c1d002.png)
![image](https://user-images.githubusercontent.com/5824953/67580823-8c645580-f779-11e9-8e63-63da7c7fad22.png)
![image](https://user-images.githubusercontent.com/5824953/67580835-8ff7dc80-f779-11e9-926b-c647812a2b04.png)

## Student
![image](https://user-images.githubusercontent.com/5824953/67580919-b158c880-f779-11e9-86c7-74c0ccf32854.png)
![image](https://user-images.githubusercontent.com/5824953/67580939-b61d7c80-f779-11e9-9bde-ecd708cf351f.png)
