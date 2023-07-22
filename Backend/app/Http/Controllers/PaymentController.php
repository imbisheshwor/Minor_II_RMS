<?php

namespace App\Http\Controllers;
use Carbon\Carbon;
use App\Models\Paymelnt;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\Payment;
require '../vendor/autoload.php';

use Cixware\Esewa\Client;
use Cixware\Esewa\Config;

class PaymentController extends Controller
{
    public function esewaPay(Request $request)
    {
        $pid = uniqid();
        $amount = $request->amount;



        // set success and failure callback urls
        $successUrl = url('/success');
        $failureUrl = url('/failure');

        // config for development
        $config = new Config($successUrl, $failureUrl);


        // initialize eSewa client
        $esewa = new Client($config);

        $esewa->process($pid, $amount, 0, 0, 0);
    }


    public function esewaPaySuccess()
    {
        //do when pay success.
        $pid = $_GET['oid'];
        $refId = $_GET['refId'];
        $amount = $_GET['amt'];

        // $order = Order::where('product_id', $pid)->first();
        $order = Payment::where('order_id', 2)->first();
        //dd($order);
        $update_status = Payment::find($order->id)->update([
            'payment_varified' => 'verified',
            'updated_at' => Carbon::now(),
        ]);
        if ($update_status) {

            $msg = 'Success';
            $msg1 = 'Payment success. Thank you for making purchase with us.';
            return response()->json(['Success' => $msg1]);
        }
    }

    public function esewaPayFailed()
    {
        //do when payment fails.
        $pid = $_GET['pid'];
        $order = Payment::where('order_id', 2)->first();

        $update_status = Payment::find($order->id)->update([
            'payment_varified' => 'failed',
            'updated_at' => Carbon::now(),
        ]);
        if ($update_status) {

            $msg = 'Fail';
            $msg1 = 'Payment success. Thank you for making purchase with us.';
            return response()->json(['sorry' => $msg1]);
        }

    }
}
