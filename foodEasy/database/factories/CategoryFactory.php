<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Category::class;
    public function definition()
    {
        $faker = \Faker\Factory::create();
        static $count = 0;
        $categories = [
            ['name' => 'Breakfast', 'desc' => '', 'img' => 'breakfast.svg'],
            ['name' => 'Food', 'desc' => '', 'img' => 'food.svg'],
            ['name' => 'Sandwich', 'desc' => '', 'img' => 'sandwich.svg'],
            ['name' => 'Drinks', 'desc' => '', 'img' => 'drinks.svg'],
        ];
        $category = $categories[$count % count($categories)];
        $count++;

        return $category;
    }
}
