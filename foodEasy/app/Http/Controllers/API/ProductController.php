<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\API\BaseController as BaseController;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\File;

class ProductController extends BaseController
{
     //index
     public function index(){
        $products = Product::with('category')->orderBy('id','desc')->get();
        try{
            return $this->sendResponse($products, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    // //show
    // public function show($id){
    //     $category = Category::findOrFail($id);
    //     try{
    //         return $this->sendResponse(['products'=>$category->products,'category'=>$category->name], '');
    //     }catch(\Exception $e){
    //         return $this->sendError($e);
    //     }; 
    // }

    //store 
    public function store(ProductRequest $request){
        try{
            $Image = null;
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                if ($file != null) {
                    $Image = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('images/products'), $Image);
                }
            }
        $product = Product::create([
            'name' => $request->name,
            'desc' => $request->desc,
            'price' => $request->price,
            'category_id' => $request->category_id,
            'img' => $Image
        ]);
            return $this->sendResponse($product, 'The product was added successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    // //edit
    // public function edit($id){
    //     try{
    //         $category = Category::findOrFail($id);
    //         return $this->sendResponse($category, '');
    //     }catch(\Exception $e){
    //         return $this->sendError($e);
    //     }; 
    // }

    // //update
    // public function update(CategoryRequest $request, $id){
    //     $category = Category::findOrFail($id);
    //         if ($request->hasFile('img')) {
    //             $file = $request->file('img');
    //             if ($file != null) {
    //                 $Image = time() . '_' . $file->getClientOriginalName();
    //                 $file->move(public_path('images/categories'), $Image);
    //             }
    //         }
    //     try{
    //         $category->update([
    //             'name' => $request->name,
    //             'desc' => $request->desc,
    //             'img' => $Image
    //         ]);
    //         return $this->sendResponse($category, 'The category was updated successfuly');
    //     }catch(\Exception $e){
    //         return $this->sendError($e);
    //     }; 
    // }

    // //Delete
    public function destroy($id){
        try{
            $product = Product::FindOrFail($id);
            $image_path = public_path('images/products'.$product->img);
            if(File::exists($image_path)){
                unlink($image_path);
            }  
            $product->delete();
            return $this->sendResponse($product, 'The category was successfuly deleted');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

}
