<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Requests\ProductRequest;
use App\Models\Category;

class CategoryController extends BaseController
{
    //index
    public function index(){
        $category = Category::all();
        try{
            return $this->sendResponse($category, '');
        }catch(\Exception $e){
            return $this->sendError($e, $errorMessages = [], $code = 404);
        }; 
    }

    //store 
    public function store(ProductRequest $request){
        
    }
}
