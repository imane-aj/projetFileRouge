<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;

class CategoryController extends BaseController
{
    //index
    public function index(){
        $categories = Category::all();
        try{
            return $this->sendResponse($categories, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    //store 
    public function store(CategoryRequest $request){
        try{
            $Image = null;
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                if ($file != null) {
                    $Image = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('images/categories'), $Image);
                }
            }
        $category = Category::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'img' => $Image
        ]);
            return $this->sendResponse($category, 'The category was added successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    //Delete
    public function destroy($id){
        try{
            $category = Category::findOrFail($id);
            $category->delete();
            return $this->sendResponse($category, 'The category was successfuly ');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }
}
