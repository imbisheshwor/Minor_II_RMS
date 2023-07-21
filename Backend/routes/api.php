<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CatogoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\Backend\CartContrller;
use App\Http\Controllers\DeliveryBoyController;

/*ProductController
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('unauthenticate',function(){
    return response()->json([
        'status' => false,
        'message' => 'unauthenticate',
    ]);
})->name('unauthenticate');

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
// Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);   
    Route::get('/users',[AuthController::class,'userList']); 
});





Route::group(['middleware' => 'auth:api'], 
// Route::group([],
function($router){
    Route::get('catogory',[CatogoryController::class,'index']);
    Route::post('catogory',[CatogoryController::class,'store']);
    Route::get('catogory/{catogory}',[CatogoryController::class,'show']);
    Route::put('catogory/{catogory}',[CatogoryController::class,'update']);
    Route::delete('catogory/{catogory}',[CatogoryController::class,'destroy']);
    
    Route::get('product',[ProductController::class,'index']);




    Route::post('product',[ProductController::class,'store']);
    Route::get('product/{product}',[ProductController::class,'show']);
    Route::put('product/{product}',[ProductController::class,'update']);
    Route::delete('product/{product}',[ProductController::class,'destroy']);
    Route::get('product/deactivate/{product}',[ProductController::class,'deactivate']);
    Route::get('product/activate/{product}',[ProductController::class,'activate']);

    Route::get('table',[TableController::class,'index']);
    Route::post('table',[TableController::class,'store']);
    Route::get('table/{table}',[TableController::class,'show']);
    Route::put('table/{table}',[TableController::class,'update']);
    Route::delete('table/{table}',[TableController::class,'destroy']);
    Route::get('table/deactivate/{table}',[TableController::class,'deactivate']);
    Route::get('table/activate/{table}',[TableController::class,'activate']);
    Route::get('table/download-qr/{table}',[TableController::class,'download']);

    Route::get('qr-menu/{table_id}',[CartContrller::class,'menu']);


    Route::post('cart',[CartContrller::class,'store']);
    Route::post('see-table-or-user-cart',[CartContrller::class,'seeTableCart']);
    Route::get('cart/{cart}',[CartContrller::class,'show']);
    Route::post('cart-update/{p_id}',[CartContrller::class,'update']);
    Route::post('cart/delete-one/{cart}',[CartContrller::class,'destroy']);
    Route::delete('table-cart-reset/{table_id}',[CartContrller::class,'tableReset']);


    Route::post('order',[OrderController::class,'store']);
    Route::get('order',[OrderController::class,'index']);

    Route::post('order/{table_id}',[OrderController::class,'table_order']); // order  of specific table
    Route::post('bills-order/{table_id}',[OrderController::class,'testBills']); 

    Route::get('esewaPayment/success',[OrderController::class,'esewaPaymentSuccess']);
    Route::get('esewaPayment/failure',[OrderController::class,'esewaPaymentFailed']);

    Route::get('today-orders',[OrderController::class,'todayOrders']);



    Route::get('delivery-boy',[DeliveryBoyController::class,'index']);
    Route::post('delivery-boy',[DeliveryBoyController::class,'store']);
    Route::get('delivery-boy/{id}',[DeliveryBoyController::class,'show']);
    Route::get('deactivate-delivery-boy/{id}',[DeliveryBoyController::class,'deactivate']);
    Route::get('activate-delivery-boy/{id}',[DeliveryBoyController::class,'activate']);
    
    Route::get('deactivate-delivery-boy/delete/{id}',[DeliveryBoyController::class,'delete']);


    

});