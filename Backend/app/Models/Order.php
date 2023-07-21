<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order_detail;

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
}
