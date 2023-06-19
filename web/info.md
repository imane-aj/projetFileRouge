<details>
<summary>Password for Api</summary>
    
    - php artisan make:middleware CheckPassword
    - we will call it in api route, and then register it in the http/kernel
            > Route::group(['middleware' => ['api', 'checkpassword'], 'namespace' => 'Api'], function(){
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
<details>
<summary>Middleware for languages</summary>
    
    - php artisan make:middleware ChangeLanguage
    - we will call it in api route, and then register it in the http/kernel
            > Route::group(['middleware' => ['api', 'checkpassword', 'ChangeLanguage'], 'namespace' => 'Api'], function(){
            all routes/api here must be api authenticated
        })
    - register the path of the middleware in the kernel
    - in the handle fun inside the middleware, u write he logic :
        app()->setLocale('en');
        if(isset($request->lang && $request->lang == 'en')){
            app()->setLocale('en');
        }
        return $next($request);
    - in the controller for exemple i have table categories witch contains name_en, name_ar, we will    laravel method to return the lang :
        - $cat = Categgory:select('id', 'name_'.app()->getLocale().'as name')->get();

</details>
<summary>JWT</summary>
    
    - composer require tymon/jwt-auth
    - php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"
    - php artisan jwt:secret

    - confi/auth.php :
        - 'guards' => [
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
            'hash' => false,
        ],
    ],

    - in Model that u want to use jwt u must implement :
        - class User extends Authenticatable implements JWTSubject{
            .....
             public function getJWTIdentifier() {
                return $this->getKey();
            }
             public function getJWTCustomClaims() {
                return [];
            }    
        }

</details>