<?php

namespace App\Http\Controllers;

use App\Helpers\MessageDisplay;
use App\Models\Table;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;
use QrCode;
use PDF;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json([
            'tables' => Table::get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(),[
                'name' => 'required',
            ]);
            if($validator->fails()){
                return response()->json([
                    'status' => 422,
                    'message' => $validator->messages(),
                ],422);
            }else{
                $table = Table::create([
                    'name' => $request->name,
                    'qrcode'=>$request->name.'.svg',
                ]);
                $id = $table->id;
                QrCode::generate('RMS.com/qr-menu/'.$id, public_path('qr_table/'.$request->name.'.svg') );
               
                DB::commit();
                return response()->json([
                    'messsge'=>"Table created Succesfully",
                    "status" => 200,
                    'data' =>$table, 
                ],200);
                
            }
            
        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['message'=>MessageDisplay::ERROR_OCCERED]);
        }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Table $table)
    {
        return response()->json([
            'table' => $table,
        ]);

       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Table $table)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required',
        ]);
        if($validator->fails()){
           return response()->json([
            'status' => 420,
            'name' => $validator->message(),
           ]); 
        } else{
            $table->name = $request->name;
            $table->save();
            return response()->json([
                'message' => "Table edited successfully",
                'status' => 200,
                'data' => $table,
            ],200);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Table $table)
    {
        $table->delete();
        return response()->json([
            'message' => "Table Delete succesffully",
            'staus'=>200
        ],200);
    }
    public function deactivate(Table $table)
    {
        $table->status = false;
        $table->save();
        return response()->json([
            'status' => 200,
            'message' => "Table deactivate successfully",
        ]);
    }
    public function activate(Table $table)
    {
        $table->status = true;
        $table->save();
        return response()->json([
            'status' => 200,
            'message' => "Table activate successfully",
        ]);
    }

    public function download(Table $table)
    {
        return response()->download(public_path('qr_table/'.$table->name.'.svg'));
       
        // $pdf = PDF::loadView('myPDF');
        // return $pdf->download('itsolutionstuff.pdf');
    }

}
