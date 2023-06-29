<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Catogory;
use App\Models\Product;
use App\Models\Table;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class seed extends Seeder
{
    /** 
     * Run the database seeds.
     */
    public function run(): void
    {
        Catogory::create([
            'name' => "Drinks",
        ]);
        Catogory::create([
            'name' => "food",
        ]);

       
        Product::create([
            'name' => "Momo",
            'sale_price' =>120,
            'photo' => "drinks.jpgproduct.jpg",
            'catogory_id' => 1,
        ]);
        Product::create([
            'name' => "Noodle",
            'sale_price' =>120,
            'photo' => "drinks.jpgproduct.jpg",
            'catogory_id' => 1,
        ]);
        Product::create([
            'name' => "Chicken",
            'sale_price' =>120,
            'photo' => "drinks.jpgproduct.jpg",
            'catogory_id' => 1,
        ]);


        Table::create([
            'name' => "Table_1",
            'qrcode' => "Table_3.svg",
        ]);
        
        Table::create([
            'name' => "Table_2",
            'qrcode' => "Table_3.svg",
        ]);
        Table::create([
            'name' => "Table_3",
            'qrcode' => "Table_3.svg",
        ]);

        User::create([
            'name' =>"Bisheshwor",
            'email' => 'admin@rms.com',
            'role' => 'admin',
            'password' => Hash::make('rms@123')
        ]);
        User::create([
            'name' =>"Bibash",
            'email' => 'user@rms.com',
            'role' => 'user',
            'password' => Hash::make('rms@123')
        ]); 
    }
}
