<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(2)->create();
        \App\Models\Category::factory(4)->create();
        \App\Models\Product::factory(48)->create();
        \App\Models\Employe::factory(6)->create();
        \App\Models\Order::factory(50)->create();
    }
}
