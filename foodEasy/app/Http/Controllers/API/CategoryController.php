<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Category;

class CategoryController extends BaseController
{
    //
    public function index(){
        $category = Category::all();
        return $this->sendResponse($category, 'User register successfully.');
    }
}
