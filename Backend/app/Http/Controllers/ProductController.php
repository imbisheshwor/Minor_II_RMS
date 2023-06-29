<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Validator;


class ProductController extends Controller
{
    
    public function index()
    {
        return response()->json([
            'products' => Product::get(),
        ]);
    }

   
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'sale_price'=> 'required',
            'catogory_id' => 'required',
            'photo' => 'required',
            'photo.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'error' => $validator->messages()
            ],422);
        } else {
                $file = $request->photo;
                $filename = "null";
                if($file){
                $filename =$file->getClientOriginalName().'product.'.$file->getClientOriginalExtension();
                $request->photo->move('Products',$filename);
                } 
            $product = Product::create([
                'name' => $request->name,
                'sale_price' => $request->sale_price,
                'catogory_id' => $request->catogory_id,
                'photo' => $filename,
               
            ]);

            if($product){
                return response()->json([
                    'message'=> 'product created successfully!!',
                    'status' => 200,
                    'data' => $product,
                ]);
            } else {
                return response()->json([
                    'message'=> "fails on created Product",
                    'message' => 500,
                    'data' => $product,
                ],500);
            }

        }

    }

   
    public function show(Product $product)
    {
        return response()->json([
            'product' => $product,
        ]);
    }

    
    public function update(Request $request, Product $product)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'sale_price' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'error' => $validator->messages(),
                
            ],422);
        } else{
            $product->name = $request->name;
            $product->sale_price = $request->sale_price;
            $product->save();

            return response()->json([
                'status' =>200,
                'message' => "product edit successfully"
            ],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => "product deleted",
            'status' =>200,
        ]);
    }
    public function deactivate(Product $product)
    {
        $product->is_active = false;
        $product->save();

        return response()->json([
            'message' => "Product deactivate successfully",
            "status" => 200,
        ],200);
    }
    public function activate(Product $product)
    {
        $product->is_active = true;
        $product->save();

        return response()->json([
            'message' => "Product activate successfully",
            "status" => 200,
        ],200);
    }


}
