<?php

namespace App\Http\Middleware;

class ApiResponse
{
    public function handle($request, $next)
    {
        $resp = $next($request);

        return $resp;
    }
}