<?php 
namespace App\Transformer;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class productResource extends JsonResource{
    public function toArray(Request $request)
    {
        return[
            'id' =>$this->id,
        ];
    }
}
?>