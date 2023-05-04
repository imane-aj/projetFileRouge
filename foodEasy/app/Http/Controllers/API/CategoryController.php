<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use Illuminate\Support\Facades\File;

class CategoryController extends BaseController
{
    //index
    public function index(){
        $categories = Category::orderBy('id','desc')->get();
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

    //edit
    public function edit($id){
        try{
            $category = Category::findOrFail($id);
            return $this->sendResponse($category, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    //update
    public function update(CategoryRequest $request, $id){
        $category = Category::findOrFail($id);
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                if ($file != null) {
                    $Image = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('images/categories'), $Image);
                }
            }
        try{
            $category->update([
                'name' => $request->name,
                'desc' => $request->desc,
                'img' => $Image
            ]);
            return $this->sendResponse($category, 'The category was updated successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    //Delete
    public function destroy($id){
        try{
            $category = Category::FindOrFail($id);
            $image_path = public_path('images/categories'.$category->img);
            if(File::exists($image_path)){
                unlink($image_path);
            }  
            $category->delete();
            return $this->sendResponse($category, 'The category was successfuly ');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }
}
