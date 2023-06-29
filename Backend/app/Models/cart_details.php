<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\Models\Cart;

class cart_details extends Model
{
    use HasFactory;
    protected $fillable =[
        'cart_id',
        'product_id',
        'qty',
    ];

    public function cart()
    {
        return $this->hasOne(Cart::class,'id','cart_id');
    }
    public function product(){
        return $this->hasOne(Product::class,'id','product_id');
    }
}
