<?php

namespace App\Http\Middleware;

class ApiAuthenticate
{
    public function handle($request, \Closure $next)
    {
        return $next($request);
    }
}