<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Cart;
use App\Models\cart_details;
use App\Helpers\MessageDisplay;

use Validator;
use Illuminate\Support\Facades\DB;

class CartContrller extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
    public function menu($table_id){
        $product = Product::where('today',1)->get();

        return response()->json([
            'product' => $product,
            'table_id' => $table_id,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if($request->type==1){
            
            $validator = Validator::make($request->all(), [
                'type' => 'required',
                'user_id' => 'required',
                'product_id' => 'required',
                'qty' => 'required'
            ]);
        }else if($request->type == 2){
            $validator = Validator::make($request->all(), [
                'type' => 'required',
                'table_id' => 'required',
                'product_id' => 'required',
                'qty' => 'required'
                
            ]);
        }
        
 
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'error'  => $validator->messages()
            ],422);
        } else{
                $cart_id=null;
                try {
                    DB::beginTransaction();
                    if($request->type == 1){
                        if(Cart::where('user_id',$request->user_id)->get()->count()==0){

                           
                            $cart = Cart::create([
                                'user_id' =>$request->user_id,
                            ]);
                            $cart_id = $cart->id;
                        }else{
                           $rawcart_id = Cart::select('id')->where('user_id',$request->user_id)->first();
                           $cart_id = $rawcart_id['id'];
                        }
                    }else if($request->type == 2){
                       
                        if(Cart::where('table_id',$request->table_id)->get()->count()==0){
                            $cart = Cart::create([
                                'table_id' =>$request->table_id,
                            ]);
                            $cart_id = $cart->id;
                        }else{
                            $rawcart_id = Cart::select('id')->where('table_id',$request->user_id)->first();
                            $cart_id = $rawcart_id['id'];
                         }
                    }else{
                        return response()->json([
                            'message' => "enter  valid type  ",
                            'status' => 500,
                            
                        ],500);
                      
                    }
                        cart_details::create([
                            'cart_id' => $cart_id,
                            'product_id'=>$request->product_id,
                            'qty'=>$request->qty,
                        ]);
                    
                
                    DB::commit();
                    return response()->json([
                        'message' => "cart created ",
                        'status' => 200,
                    ]);


                } catch (\Exception $ex) {
                    DB::rollBack();
                    return response()->json([
                        'message' => "cart created faild  ",
                        'status' => 500,
                        
                    ],500);
                }
            
        }
    }

    

    public function seeTableCart(Request $request)
    {
     
        $cart_id = null;
        $cart_details = null;
       $product = [];
       $product_data = [];
       $id = $request->id;
       if($request->type==1){
            $cart_id = Cart::select('id')->where('user_id',$id)->first();
       }else if($request->type==2){
            $cart_id = Cart::select('id')->where('table_id',$id)->first();
       } else{
            return response()->json([
                'message' => 'inavalid type',
            ]);
       } 
      
       $cart_details = cart_details::where('cart_id',$cart_id['id'])->get();
       $total_bill =0;
       foreach ($cart_details as $cd) {
        $product_details = Product::find($cd['product_id'])->toArray();
       
        $product_name = $product_details['name'];
        $rate = $product_details['sale_price'];
        $photo = $product_details['photo'];
        $qty = $cd['qty'];
        $price = $rate*$qty;

        $total_bill = $total_bill+ $price;

        $res = array("id"=>$product_details['id'],"name"=>$product_name,"rate"=>$rate,"photo"=>$photo,"quantity"=>$qty,"price"=>$price);

        array_push($product,$res);
        
       }
       return response()->json([ "product" =>$product, "total_bill" => $total_bill]);
      
    }

    
    public function update(Request $request, $p_id)
    {
        $cart_id = null;    
        if($request->type == 1){
            $validator = Validator::make($request->all(),[
                'qty' => 'required',
                'user_id' =>'required',
                
            ]);
            $cart_id = Cart::select('id')->where('user_id',$request->user_id)->first();
        }else if($request->type == 2){
            $validator = Validator::make($request->all(),[
                'qty' => 'required',
                'table_id' =>'required',
            ]);
            $cart_id = Cart::select('id')->where('table_id',$request->table_id)->first();
        } else {
            return response()->json([
                'message' => MessageDisplay::INVALID_USER_TYPE,
            ]);
        }
        
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'error'  => $validator->messages()
            ],422);
        } else{
           $cart_details_id = cart_details::select('id')->where(['cart_id'=>$cart_id['id'],'product_id'=>$p_id])->first();  
            cart_details::find($cart_details_id['id'])->update(['qty'=>$request->qty]);
           
            return response()->json([
                'message' => MessageDisplay::CART_UPDATE,
            ]);
        }
    
    }

    public function destroy(Request $request,$product_id)
    {
        $id = null;
       if($request->type== 1){
         $id = Cart::select('id')->where('user_id',$request->user_id)->first();
       }else if($request->type==2){
            $cart_id = Cart::select('id')->where('table_id',$id)->first();
        } else{
                return response()->json([
                    'message' => MessageDisplay::INVALID_USER_TYPE,
                ],420);
        }
        
      cart_details::where(['product_id'=>$product_id,'cart_id'=>$id['id']])->delete();
        
      return response()->json(['deleted']);  
    }

    public function tableReset($table_id)
    {
        DB::beginTransaction();
        try {
            $cart_id = Cart::select('id')->where('table_id',$table_id)->first();
            $cart_details = cart_details::where('cart_id',$cart_id['id'])->get();
            
            foreach ($cart_details as $cd) {
                $cd->delete();
            }
            Cart::find($cart_id['id'])->delete();
            DB::commit();

            return response()->json([
            'data' => $cart_details,
                'message' => "tables-cart Delete succesffully",
                'staus'=>200
            ],200);
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json([
            
                'message' => "error on-cart Delete! please try agian!",
                'staus'=>200
            ],200);
        }
        
    }
}
