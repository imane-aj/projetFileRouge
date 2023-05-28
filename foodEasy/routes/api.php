<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\CheckoutController;
use App\Http\Controllers\API\EmployeController;
use App\Http\Controllers\API\ProductController;
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
    Route::get('category/{id}', [CategoryController::class, 'show']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:api');

   // Route for getting all products
    Route::get('/products', [ProductController::class, 'index']);
    Route::get('/randomProduct', [ProductController::class, 'randomProduct']);
    // Route for getting products by category
    Route::get('/products/{category}', [ProductController::class, 'index']);
    //search product
    Route::get('/searchProducts', [ProductController::class, 'search']);

    
    //admin routes
    Route::middleware(['auth:api', 'role:admin'])->prefix('admin')->group(function () {
        Route::post('category', [CategoryController::class, 'store']);
        Route::get('category/update/{id}', [CategoryController::class, 'edit']);
        Route::PUT('category/update/{id}', [CategoryController::class, 'update']);
        Route::delete('category/{id}', [CategoryController::class, 'destroy']);
        Route::get('getDelivery', [EmployeController::class, 'getDelivery']);

        //products
        Route::post('product', [ProductController::class, 'store']);
        Route::delete('product/{id}', [ProductController::class, 'destroy']);
        Route::PUT('product/update/{id}', [ProductController::class, 'update']);
        });

    //user routes
    Route::middleware(['auth:api', 'role:user'])->group(function () {
    Route::post('cart', [CartController::class, 'addToCart']);
    Route::PUT('cart/updateQtity/{cart_id}/{scope}', [CartController::class, 'updateQtity']);
    Route::get('cart/product', [CartController::class, 'getCart']);
    Route::delete('cart/{id}', [CartController::class, 'deleteCart']);
    Route::post('addOrder', [CheckoutController::class, 'placeOrder']);
    Route::post('validateOrder', [CheckoutController::class, 'validateOrder']);
    Route::get('getOrders', [CheckoutController::class, 'getOrders']);
    });
 
});




