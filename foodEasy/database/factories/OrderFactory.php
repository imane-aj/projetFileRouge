<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition()
    {
        $startDate = Carbon::now()->startOfMonth();
        $endDate = Carbon::now()->endOfMonth();
        $date = $this->faker->dateTimeBetween($startDate, $endDate);

        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'email' => $this->faker->email,
            'phone' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'user_id' => 2,
            'payment_id' => null,
            'payment_mode' => $this->faker->randomElement(['Cash', 'Razorpay', 'PayPal']),
            'tracking_no' => $this->faker->unique()->randomNumber(6),
            'status' => $this->faker->randomElement(['Pending', 'Processing', 'Shipped', 'Delivered']),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
