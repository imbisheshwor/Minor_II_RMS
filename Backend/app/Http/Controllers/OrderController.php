<?php

namespace App\Http\Controllers;

use App\Helpers\MessageDisplay;
use App\Models\DeliveryBoy;
use App\Models\Order;
use App\Models\Order_detail;
use App\Models\Payment;
use App\Models\Product;
use GuzzleHttp\Psr7\Message;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\DB;

require '../vendor/autoload.php';
use Cixware\Esewa\Client;
use Cixware\Esewa\Config;

class OrderController extends Controller
{

    public function index()
    {

       $order = Order::with('order')->get();

       return response()->json(['data' => $order]);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function table_order($table_id)
    // {
    //     // $order =DB::select("select p.name as name,o.served as served, p.sale_price as price, od.quantity as quantity , p.sale_price * od.quantity as amount from orders o inner join order_details od on o.id = od.order_id inner join products p on p.id = od.product_id where o.table_id=1;");

    //     // return response()->json([
    //     //     'status' => "success",
    //     //     'data' => $order,
    //     //     'message'=> "order of the table",
    //     // ]) ;
    // }
    public function table_order(Request $request,$id)
    {
        $order_id = null;
        $order_details = null;
       $product = [];
       $product_data = [];
       if($request->type=="delivered"){
            $order_id = Order::select('id')->where('user_id',$id)->first();
       }else if($request->type =="serve"){
            $order_id = Order::select('id')->where('table_id',$id)->first();
       } else{
            return response()->json([
                'message' => 'inavalid type',
            ]);
       }
           $order_details = Order_detail::where('order_id',$order_id['id'])->get();
           $total_bill =0;
           foreach ($order_details as $cd) {
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
           return response()->json([ "order_id" => $order_id['id'],"product" =>$product, "total_bill" => $total_bill]);

    }


    public function store(Request $request)
    {
        DB::beginTransaction();
        // try {
            if($request->type=='serve'){
                $id = null;
                $validator = Validator::make($request->all(), [
                    'type' => 'required',
                    'table_id' => 'required',
                    'items' => 'required',
                ]);

                if($validator->fails()){
                    return response()->json([
                        'status' => 422,
                        'error'  => $validator->messages()
                    ],422);
                } else{
                    $order = Order::create([
                        'type' => $request->type,
                        'table_id' => $request->table_id,
                    ]);
                    $order_id = $order->id;

                    $total_bill =0;
                    foreach ($request->items as $item) {
                        Order_detail::create([
                            'order_id' =>$order_id,
                            'product_id'=>$item['product_id'],
                            'qty'=>$item['qty'],
                        ]);

                    }
                    $product_price = Product::find($item['product_id'])->first();
                    $total_bill = $total_bill+$product_price['sale_price']*$item['qty'];


                }

                Payment::create([
                    'order_id' =>$order_id,
                    'advance_amount' =>null,
                    'total_amount' => $total_bill,
                ]);
                   DB::commit();



                   return response()->json([
                    'message'=>MessageDisplay::ORDER_PLACED,
                   ]);


            }else if($request->type == 'delivered'){
                // to free delivered rider
                $free_ids = [];
                $db_boys_id = DeliveryBoy::select('id')->where('is_free',1)->get();

                foreach ($db_boys_id as $id) {
                   array_push($free_ids,$id['id']);
                }
                $ran_num = rand(0,$db_boys_id->count()-1);

                $validator = Validator::make($request->all(), [
                    'type' => 'required',
                    'user_id' => 'required',
                    'items' => 'required',
                    'delivery_address' => 'required',
                ]);
                if($validator->fails()){
                    return response()->json([
                        'status' => 422,
                        'error'  => $validator->messages()
                    ],422);
                } else{
                    $order = Order::create([
                        'type' => $request->type,
                        'user_id' => $request->user_id,
                        'delivery_address'=>$request->delivery_address,
                        'assigned_delivery_boy_id' => $free_ids[$ran_num],
                    ]);

                    $order_id = $order->id;
                    $total_bill =0;
                    foreach ($request->items as $item) {
                        Order_detail::create([
                            'order_id' =>$order_id,
                            'product_id'=>$item['id'],
                            'qty'=>$item['quantity'],
                        ]);
                        $product_price = Product::find($item['id'])->first();
                        $total_bill = $total_bill+$product_price['rate']*$item['quantity'];


                    }
                    // dd($total_bill);
                    Payment::create([
                        'order_id' =>$order_id,
                        'payment_type' => $request->payment_type,
                        'advance_amount' =>$request->advance_amount,
                        'total_amount' => $total_bill,
                        'payment_verified'=>"null",
                    ]);
                   DB::commit();
############################  E-SEWA    ##################################################
                //    $successUrl = url('/success');
                //     $failureUrl = url('/failure');

                //     // Config for development.
                //     $config = new Config($successUrl, $failureUrl);
                //     // Initialize eSewa client.
                //     $esewa = new Client($config);

                //     $esewa->process($order_id, $request->advance_amount, 0, 0, 0);

                   return response()->json([
                    'message'=>MessageDisplay::ORDER_PLACED,
                   ]);

                }

            } else {
                return response()->json([
                    'Message' => MessageDisplay::INVALID_USER_TYPE,
                ]);
            }



        // } catch (\Throwable $th) {
        //     DB::rollBack();
        //     return response()->json([
        //         'message' => MessageDisplay::ERROR_OCCERED,
        //     ]);
        // }

    }



    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }



    public function testBills(Request $request, $id)
    {

        $order_id = null;
        $order_details = null;
       $product = [];
       $product_data = [];
       if($request->type=="delivered"){
            $order_id = Order::select('id')->where('user_id',$id)->first();
       }else if($request->type =="serve"){
            $order_id = Order::select('id')->where('table_id',$id)->first();
       } else{
            return response()->json([
                'message' => 'inavalid type',
            ]);
       }
           $order_details = Order_detail::where('order_id',$order_id['id'])->get();
           $total_bill =0;
           foreach ($order_details as $cd) {
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
           return response()->json([ "order_id" => $order_id['id'],"product" =>$product, "total_bill" => $total_bill]);

    }

    public function todayOrders()
    {
        $today =  (new \DateTime())->format('Y-m-d');
        $total_served = 0;
        $pending = 0;
       $today_order =  Order::query()
        ->where('created_at', 'LIKE', "%{$today}%")
        ->get();

        foreach ($today_order as $t) {

            if($t['served']){
                $total_served++;
            }else{
                $pending++;
            }
        }




     //return response()->json(["Today orders"=>$s]);
        return response()->json([
            "Today orders"=>$today_order->count(),
            "served_order" =>$total_served,
            "pending_order" =>$pending,
        ]);

    }

    public function esewaPaymentSuccess()
    {
        $id = $_GET['oid'];
        $refId = $_GET['refId'];
        $amount = $_GET['amt'];

        $payment = Payment::where('order_id',$id)->first();
        $update_status = Payment::find($payment->id)->update([
            'advance_amount' => $amount,
            'payment_verified' => "E-sewa Verified",
        ]);

        if($update_status){
            return response()->json(['message'=>MessageDisplay::ORDER_PLACED]);
        }else{
            return response()->json(['message'=>MessageDisplay::ERROR_OCCERED]);
        }

    }

    public function esewaPaymentFailed()
    {
        $id = $_GET['oid'];
        $refId = $_GET['refId'];
        $amount = $_GET['amt'];

        $payment = Payment::where('order_id',$id)->first();
        $update_status = Payment::find($payment->id)->update([
            'advance_amount' => 0,
            'payment_verified' => "E-sewa fail",
        ]);

        if($update_status){
            return response()->json(['message'=>"esewa fail"]);
        }else{
            return response()->json(['message'=>MessageDisplay::ERROR_OCCERED]);
        }

    }


}
