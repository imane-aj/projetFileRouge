<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckPassword
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $api_password = $request->header('api_password');
        if( !$api_password || $api_password != env('API_PASSWORD') ){
            return response()->json(['message' => 'unauthenticated.']);
        }
        return $next($request);
    }
}
