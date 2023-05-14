<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Requests\CheckoutRequest;
use App\Models\Order;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckoutController extends BaseController
{
    //
    public function placeOdrer(CheckoutRequest $request){
        $user = JWTAuth::parseToken()->authenticate();
        $order = Order::where('user_id', $user->id)->first();
        try{
            $order->first_name = $request->first_name;
            $order->last_name = $request->last_name ;
            $order->email = $request->email ;
            $order->phone = $request->phone ;
            $order->address = $request->address ;
            $order->user_id = $user->id ;
            $order->payment_id = $request->payment_id ;
            $order->payment_mode = $request->payment_mode ;
            $order->tracking_no = $request->tracking_no ;
            $order->save();
            return $this->sendResponse($order, 'The order placed successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }
}
