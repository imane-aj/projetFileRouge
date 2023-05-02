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
    public function definition(): array
    {
        $faker = \Faker\Factory::create();
        return [
            //
            'name' => $faker->word,
            'desc' => $faker->sentence,
            'img' => $faker->imageUrl($width = 640, $height = 480),
        ];
    }
}
