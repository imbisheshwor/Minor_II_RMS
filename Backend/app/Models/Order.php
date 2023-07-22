<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order_detail;
use App\Models\User;

class Order extends Model
{

    use HasFactory;
    protected $fillable = [
        'type',
        'user_id',
        'table_id',
        'delivery_address',
        'assigned_delivery_boy_id',
    ];

    public function order(){
        return $this->hasMany(Order_detail::class);
    }
    // public function user(){
    //     return $this->hasOne(User::class);
    // }
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
}


