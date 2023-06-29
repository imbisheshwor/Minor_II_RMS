<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart extends Model
{
    
    use HasFactory;
    protected $fillable =[
        'table_id',
        'user_id',
    ];

    public function cart()
    {
        return $this->hasMany(cart_details::class,'id','cart_id');
    }
}
