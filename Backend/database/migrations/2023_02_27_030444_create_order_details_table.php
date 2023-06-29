<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->BigInteger('order_id')->unsigned();
            $table->foreign('order_id')->references('id')->on('orders');
            $table->BigInteger('product_id')->unsigned();
            $table->foreign('product_id')->references('id')->on('products');
            $table->float('qty',8,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
