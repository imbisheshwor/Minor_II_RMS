<?php

namespace App\Http\Controllers;

use App\Helpers\MessageDisplay;
use App\Models\DeliveryBoy;
use App\Models\User;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Validator;
    
class DeliveryBoyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $finalDB =[];
        $deliveryBoy = DeliveryBoy::all();
        foreach ($deliveryBoy as $db) {
            $user = User::find($db['user_id']);
            $db['user_data'] = $user;
            
        }
        return response()->json([
            "data" => $deliveryBoy,
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try{
            $validator = Validator::make($request->all(),[
                'name' => 'required',
                'address'=> 'required',
                'salary' => 'required',
                'photo' => 'required',
                'photo.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'phone'=> 'required',
                'email' => 'required|unique:users,email,' . $request->email,
                'password' => 'required',
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
                    $filename =$file->getClientOriginalName().'DeliveryBoy.'.$file->getClientOriginalExtension();
                    $request->photo->move('DeliveryBoy',$filename);
                    } 


                $user = User::create([
                    'name' =>$request->name,
                    'email' =>$request->email,
                    'password' => Hash::make($request->password),
                    'role' => 'delivery',
                ]);
              
                DeliveryBoy::create([
                    'user_id' => $user->id,
                    'address' => $request->address,
                    'salary' => $request->salary,
                    'phone' => $request->phone,
                    'photo' => $filename,
                   
                ]);
            }
            DB::commit();
            return response()->json([
                'message'=> MessageDisplay::DATA_INSERT,
                
                
            ],200);
    
        }catch (\Exception $ex){
            DB::rollBack();
            return response()->json([
                'message'=> MessageDisplay::ERROR_OCCERED,
                
                
            ],420);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $deliveryBoy = DeliveryBoy::find($id);
        $user = null;
        if(isset($deliveryBoy)){
            $user = User::find($deliveryBoy['user_id']);
        }
        $deliveryBoy['user'] =$user;
        return response()->json(['user_data' => $deliveryBoy]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, DeliveryBoy $deliveryBoy)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function deactivate($id)
    {
        DeliveryBoy::where('id',$id)->update(['is_active'=>false]);
        return response()->json([
            'message' => MessageDisplay:: DEACTIVATED,
        ]);
    }

    public function activate($id)
    {
        DeliveryBoy::where('id',$id)->update(['is_active'=>true]);
        return response()->json([
            'message' => MessageDisplay:: ACTIVATED,
        ]);
    }
}
