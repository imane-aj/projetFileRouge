<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
        'address',
        'user_id',
        'payment_id',
        'payment_mode',
        'tracking_no',
        'status',
        'remark',
    ];
    public function product(){
        return $this->hasMany(Order::class);
    }
    
}
