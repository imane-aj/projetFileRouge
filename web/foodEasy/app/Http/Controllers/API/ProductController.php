<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\API\BaseController as BaseController;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class ProductController extends BaseController
{
    //random 
    public function randomProduct(){

        $products = Product::inRandomOrder()->paginate(24);
        try{
            return $this->sendResponse($products, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

     //index
     public function index(Request $request, $category = 'all'){
        $query = Product::with('category');

        if ($category !== null) {
            if ($category === 'all') {
                $query->inRandomOrder()->paginate(8);
            } else {
                $query->where('category_id', $category)->orderBy('id', 'desc')->paginate(8);
            }
        }

        $products = $query->get();
        try{
            return $this->sendResponse($products, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

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
    public function edit($id){
        try{
            $product = Product::findOrFail($id);
            return $this->sendResponse($product, '');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

    // //update
    public function update(ProductRequest $request, $id){
        $product = Product::findOrFail($id);
            if ($request->hasFile('img')) {
                $file = $request->file('img');
                if ($file != null) {
                    $Image = time() . '_' . $file->getClientOriginalName();
                    $file->move(public_path('images/products'), $Image);
                }
            }
        try{
            $product->update([
                'name' => $request->name,
                'desc' => $request->desc,
                'price' => $request->price,
                'category_id' => $request->category_id,
                'img' => $Image
            ]);
            return $this->sendResponse($product, 'The product was updated successfuly');
        }catch(\Exception $e){
            return $this->sendError($e);
        }; 
    }

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

    //search 
    public function search(Request $request){
        $query = $request->get('query');
        if (empty($query)) {
            // If the search query is empty, return an empty result
            $product = [];
        } else {
            // Perform the search based on the query
            $product = Product::where('name', 'like', '%' . $query . '%')->get();
        }
        try{
            return $this->sendResponse($product, 200);
        }catch(\Exception $e){
            return $this->sendError($e);
        }
    }
}
