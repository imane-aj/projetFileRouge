<details>
<summary>Password for Api</summary>
    - we will make a new middleware :
        - php artisan make:middleware CheckPassword
    - we will call it in api route, and then register it in the http/kernel 
        - Route::group(['middleware' => ['api', 'checkpassword'], 'namespace' => 'Api'], function(){
            all routes/api here must be api authenticated
        })
        - register the path of the middleware in the kernel
    - in the handle fun inside the middleware, u write he logic :
        if( $request->api_password != env('API_PASSWROD')){
            return response()->json(['message'=>'unauthenticated.']);
        }
        return $next($request);
    - we declare the API_PASSWORD in the env.
        - API_PASSWORD : here u write ur password
        - php artisan config:cache
</details>
<details>
<summary>middleware for languages</summary>
    - we will make a new middleware :
        - php artisan make:middleware CheckPassword
    - we will call it in api route, and then register it in the http/kernel 
        - Route::group(['middleware' => ['api', 'checkpassword'], 'namespace' => 'Api'], function(){
            all routes/api here must be api authenticated
        })
        - register the path of the middleware in the kernel
    - in the handle fun inside the middleware, u write he logic :
        if( $request->api_password != env('API_PASSWROD')){
            return response()->json(['message'=>'unauthenticated.']);
        }
        return $next($request);
    - we declare the API_PASSWORD in the env.
        - API_PASSWORD : here u write ur password
        - php artisan config:cache
</details>