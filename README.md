# Inertia Todo (Laravel + React)

Simple Laravel 12 + Inertia React starter with username-based login, protected home route, Ziggy routes, and reusable UI components.

## Stack

- Laravel 12
- Inertia.js (Laravel + React)
- Vite
- Tailwind CSS v4
- Ziggy (`route()` in React)

## Auth Behavior

- `/` is protected by a custom middleware: `custom.auth`
- If user is not logged in, request is redirected to `/login`
- Login uses `username` + `password` (not email)

Middleware file:
- `app/Http/Middleware/EnsureAuthenticated.php`

Alias registration:
- `bootstrap/app.php` as `custom.auth`

## Installation Guide

1. Install PHP dependencies

```bash
composer install
```

2. Install JS dependencies

```bash
npm install
```

3. Prepare env file

```bash
cp .env.example .env
```

4. Generate app key

```bash
php artisan key:generate
```

5. Run migrations with seeders

```bash
php artisan migrate --seed
```

6. Start development servers

```bash
composer run dev
```

7. Open app

- App: `http://127.0.0.1:8000`
- Login: `http://127.0.0.1:8000/login`

## Default Seeded User

Created by `database/seeders/UserSeeder.php`.

- Username: `admin`
- Password: `password123`
- Email: `admin@example.com`

The seeder also creates 5 random users.

## Useful Commands

- Run tests:

```bash
php artisan test
```

- Build assets:

```bash
npm run build
```

- Fresh reset DB + seed:

```bash
php artisan migrate:fresh --seed
```

## Frontend Reusables

- Shared layout:
  - `resources/js/layouts/AuthLayout.jsx`
- Shared components:
  - `resources/js/components/shared/Input.jsx`
  - `resources/js/components/shared/Button.jsx`

## Routes (Current)

- `GET /login` -> login form
- `POST /login` -> authenticate
- `POST /logout` -> logout
- `GET /` -> protected home
- `GET /about` -> public about page
# laravel-inertia-taliwind
