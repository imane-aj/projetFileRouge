<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;
    protected $fillable = ['qtity','user_id' ,'product_id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    protected $with = ['product'];
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
