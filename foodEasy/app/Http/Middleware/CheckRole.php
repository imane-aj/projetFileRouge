<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = Auth::user();
        
        if (! $user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        
        foreach ($roles as $role) {
            if ($user->role === $role) {
                return $next($request);
            }
        }
        
        return response()->json(['error' => 'Forbidden'], 403);
    }
}
