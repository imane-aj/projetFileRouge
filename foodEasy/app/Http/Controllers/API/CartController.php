<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Cart;
use App\Models\Product;
use Tymon\JWTAuth\Facades\JWTAuth;

class CartController extends BaseController
{
    //
      //add to cart
      public function addToCart(Request $request){
        $token = $request->bearerToken();
        $user = JWTAuth::parseToken()->authenticate();
            try{
                $user_id = $user->id;
                $product_id = $request->product_id;
                $qtity = 1;
                $productCheck = Product::find($product_id);
               
                if($productCheck){
                    if(Cart::where('product_id',$product_id)->where('user_id',$user_id)->exists()){
                        try{
                            return response()->json(['error' => 'Already added to cart'],400);
                        }catch(\Exception $e){
                            return $this->sendError($e);
                        };
                    }else{
                         // Calculate subtotal
                        $subtotal = $qtity * $productCheck->price;
                        // Calculate total (assuming no additional charges)
                        $total = $subtotal + 10;
                        $cartItem = new Cart;
                        $cartItem->qtity = $qtity;
                        $cartItem->product_id = $product_id;
                        $cartItem->user_id = $user_id;
                        $cartItem->subtotal = $subtotal;
                        $cartItem->total = $total;
                        $cartItem->save();
                        try{
                            return $this->sendResponse($cartItem, 'The product in the cart');
                        }catch(\Exception $e){
                            return $this->sendError($e);
                        };
                    }
                }
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }
}
