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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['serve', 'delivered']);
            $table->BigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users');
            $table->BigInteger('table_id')->unsigned()->nullable();
            $table->foreign('table_id')->references('id')->on('tables');
            $table->boolean('served')->default(false);
            $table->boolean('delivered')->default(false);
            $table->string('delivery_address')->nullable();
            $table->enum('order_status', ['arrived', 'ready','delivered'])->default('arrived');
            $table->boolean('is_ready')->default(false);
            $table->bigInteger('assigned_delivery_boy_id')->unsigned()->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
