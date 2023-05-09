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
                        $cartItem = new Cart;
                        $cartItem->qtity = $qtity;
                        $cartItem->product_id = $product_id;
                        $cartItem->user_id = $user_id;
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

    public function getCart(Request $request){
        $token = $request->bearerToken();
        $user = JWTAuth::parseToken()->authenticate();
        $user = $user->cart()->orderBy('id', 'desc')->get();
        try{
            return $this->sendResponse($user, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }

    public function updateQtity(Request $request,$cart_id, $scope ){
        $token = $request->bearerToken();
        $user = JWTAuth::parseToken()->authenticate();
        dd($token, $user);
        $cart = Cart::where('id',$cart_id)->where('user_id',$user)->first();
        if($scope === 'inc'){
            $cart->qtity += 1;
        }else if($scope === 'dec'){
            $cart->qtity -= 1;
        }
        
        $cart->update();
        try{
            return $this->sendResponse($cart, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        };
    }
}
