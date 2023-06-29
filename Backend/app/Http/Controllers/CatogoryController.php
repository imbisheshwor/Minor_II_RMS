<?php

namespace App\Http\Controllers;

use App\Models\Catogory;
use Illuminate\Http\Request;
use Validator;

class CatogoryController extends Controller
{
   
    public function index()
    {
        return response()->json([
            'catogories' => Catogory::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()){          
            return response()->json([
                'status' => 422,
                'error'  => $validator->messages()
            ],422);
        } else{
            $ca = Catogory::create([
                'name' => $request->name,
            ]);

            if($ca){
                return response()->json([
                    'message' => "catogory created ",
                    'status' => 200,
                    'data' => $ca,
                ],200);
            } else{
                return response()->json([
                    'message' => "catogory created faild  ",
                    'status' => 500,
                    'data' => $ca,
                ],500);
            }
        }

        


        // $ca = new Catogory;
        // $ca->name = $request->name;

        // $ca->save();
        // return response()->json([
        //     'message' => "catogory created ",
        //     'status' => 'success',
        //     'data' => $ca,
        // ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Catogory $catogory)
    {
        return response()->json(['catogory'=>$catogory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Catogory $catogory)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()){          
            return response()->json([
                'status' => 422,
                'error'  => $validator->messages()
            ],422);
        } else{
            $catogory->name = $request->name;
            $catogory->save();

            return response()->json([
                'message' => "catogory Updated! ",
                'status' => 'success',
                'data' => $catogory,
            ]);
           
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Catogory $catogory)
    {
        $catogory->delete();
        return response()->json(['message' => 'Catogory Delete Successfully!!',
        'status' => 'success']);
    }
}
