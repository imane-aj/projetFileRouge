<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Product::class;
    public function definition()
    {
        static $count = 0;
        $foodId  = Category::where('name', 'Food')->first()->id;
        $breakfastId  = Category::where('name', 'Breakfast')->first()->id;
        $sandwitchId  = Category::where('name', 'Sandwich')->first()->id;
        $drinkId  = Category::where('name', 'Drinks')->first()->id;
        $products = [
            //drinks
            ['name' => 'Coffee', 'price' => 2.50, 'img' => 'coffee.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Tea', 'price' => 2.00, 'img' => 'tea.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Soda', 'price' => 1.50, 'img' => 'soda.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Juice', 'price' => 3.00, 'img' => 'juice.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Mokhito', 'price' => 5.00, 'img' => 'mokhito.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Zaezae', 'price' => 10.00, 'img' => 'zaezae.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Energy Drinks', 'price' => 8.00, 'img' => 'energy.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Lemonade', 'price' => 2.50, 'img' => 'lemonade.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Smoothie', 'price' => 4.00, 'img' => 'smoothie.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Milkshake', 'price' => 5.00, 'img' => 'milkshake.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Water', 'price' => 1.00, 'img' => 'water.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Iced Tea', 'price' => 2.50, 'img' => 'iced_tea.jpg', 'category_id' => $drinkId, 'desc' => ''],


            //'Sandwich':
            ['name' => 'BLT', 'price' => 7.50, 'img' => 'blt.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Grilled Cheese', 'price' => 6.00, 'img' => 'grilled_cheese.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Club', 'price' => 9.00, 'img' => 'club.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Reuben', 'price' => 8.50, 'img' => 'reuben.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Philly Cheesesteak', 'price' => 10.00, 'img' => 'philly_cheesesteak.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'French Dip', 'price' => 9.50, 'img' => 'french_dip.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Meatball Sub', 'price' => 8.50, 'img' => 'meatball_sub.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Panini', 'price' => 7.00, 'img' => 'panini.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Croissant Sandwich', 'price' => 6.50, 'img' => 'croissant_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Chicken Salad Sandwich', 'price' => 7.50, 'img' => 'chicken_salad_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Grilled Chicken Sandwich', 'price' => 8.00, 'img' => 'grilled_chicken_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
            ['name' => 'Turkey Sandwich', 'price' => 7.50, 'img' => 'turkey_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],

            //'Food':
            ['name' => 'Spaghetti', 'price' => 10.00, 'img' => 'spaghetti.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Lasagna', 'price' => 12.00, 'img' => 'lasagna.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Biriani', 'price' => 15.00, 'img' => 'birianu.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Burger', 'price' => 8.00, 'img' => 'burger.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Hot Dog', 'price' => 5.00, 'img' => 'hot_dog.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Taco', 'price' => 4.00, 'img' => 'taco.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Fried Chicken', 'price' => 10.00, 'img' => 'fried_chicken.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Tajin Meat', 'price' => 7.50, 'img' => 'tajin.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Sushi', 'price' => 12.00, 'img' => 'sushi.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Ramen', 'price' => 9.00, 'img' => 'ramen.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Stir Fry', 'price' => 11.00, 'img' => 'stir_fry.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Pad Thai', 'price' => 12.00, 'img' => 'pad_thai.jpg', 'category_id' => $foodId, 'desc' => ''],

            //'Breakfast':
            ['name' => 'Eggs Benedict', 'price' => 9.00, 'img' => 'eggs_benedict.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Banane Pancake', 'price' => 6.50, 'img' => 'pancakes.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Waffles', 'price' => 7.50, 'img' => 'waffles.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Bacon and Eggs', 'price' => 8.50, 'img' => 'bacon_and_eggs.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Omelette', 'price' => 9.00, 'img' => 'omelette.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Avocado Toast', 'price' => 7.00, 'img' => 'avocado_toast.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Breakfast Burrito', 'price' => 8.00, 'img' => 'breakfast_burrito.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Muffin', 'price' => 3.00, 'img' => 'muffin.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Granola Bowl', 'price' => 6.50, 'img' => 'granola_bowl.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Bagel with Cream Cheese', 'price' => 4.50, 'img' => 'bagel_with_cream_cheese.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'French Toast', 'price' => 7.00, 'img' => 'french_toast.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'English Muffin', 'price' => 2.50, 'img' => 'english_muffin.jpg', 'category_id' => $breakfastId, 'desc' => '']
        ];

        $product = $products[$count % count($products)];
        $count++;

        return $product;
    }
}
