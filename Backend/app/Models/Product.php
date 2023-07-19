<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'sale_price',
        'catogory_id',
        'photo',
    ]; 

    public function getPhotoAttribute($value){
        return asset('Products/'.$value);
    }
}
