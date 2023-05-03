<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => ['api', 'checkpassword'], 'namespace' => 'Api'], function(){
    Route::get('categories', [CategoryController::class, 'index']);
    Route::get('category/{id}', [CategoryController::class, 'edit']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');
   
    
    //admin routes
    Route::middleware(['auth:api', 'role:admin'])->prefix('admin')->group(function () {
        Route::post('category', [CategoryController::class, 'store']);
        Route::delete('category/{id}', [CategoryController::class, 'destroy']);
    });

    //user routes
    Route::middleware(['auth:api', 'role:user'])->group(function () {
        // Route::get('profile', [userController::class, 'index']);
    });
 
});




