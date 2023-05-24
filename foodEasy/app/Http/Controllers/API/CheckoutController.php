<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Requests\CheckoutRequest;
use App\Models\Cart;
use App\Models\Order;
use Tymon\JWTAuth\Facades\JWTAuth;

class CheckoutController extends BaseController
{
    //
    public function placeOrder(CheckoutRequest $request){
        $user = JWTAuth::parseToken()->authenticate();
        $order = Order::where('user_id', $user->id)->first();
     
        try{
            $order = new Order;
            $order->first_name = $request->first_name;
            $order->last_name = $request->last_name ;
            $order->email = $request->email ;
            $order->phone = $request->phone ;
            $order->address = $request->address ;
            $order->user_id = $user->id ;
            $order->payment_mode = $request->payment_mode ;
            $order->payment_id = $request->payment_id ;
            $order->tracking_no = 'foudify'.rand(1111,9999) ;
            $order->save();

            $cart = Cart::where('user_id', $user->id)->get();
            $orderItem = [];
            foreach($cart as $item){
                $orderItem[] = [
                    'product_id' => $item->product_id,
                    'qtity' => $item->qtity,
                    'price' => $item->product->price,
                ];
            }
            $order->orderIttem()->createMany($orderItem);
            Cart::destroy($cart);
            return $this->sendResponse($order, 'The order placed successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }

    public function validateOrder(CheckoutRequest $request){
        $user = JWTAuth::parseToken()->authenticate();
        try{
            return $this->sendResponse('the Form validated Successfully', 200);
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }

    public function getOrders(){
        try{
            $orders = Order::get();
            return $this->sendResponse($orders, 'All orders');
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }

}
