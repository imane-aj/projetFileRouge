<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        static  $count = 0;
        $users = [
            // ['name' => fake()->name(),'email' => fake()->unique()->safeEmail(),'email_verified_at' => now(), 'password' =>  bcrypt('admin'),  'remember_token' => Str::random(10),],
            ['name' => fake()->name(),'email' => 'admin@admin.com','email_verified_at' => now(), 'password' =>  bcrypt('admin'),  'remember_token' => Str::random(10),'role'=>'admin'],
            ['name' => fake()->name(),'email' => 'user@user.com','email_verified_at' => now(), 'password' =>  bcrypt('user'),  'remember_token' => Str::random(10),],
        ];
        $user = $users[$count % count($users)];
        $count++;

        return $user;
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
