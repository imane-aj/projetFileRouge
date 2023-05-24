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

// $products = [
//     // Drinks
//     ['name' => 'Coffee', 'price' => 2.50, 'img' => 'coffee.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Coffee beans', 'picture' => 'coffee_beans.jpg', 'benefits' => ['Rich in antioxidants', 'May improve brain function', 'Contains vitamins and minerals']]], 'calories' => 5],
//     ['name' => 'Tea', 'price' => 2.00, 'img' => 'tea.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Tea leaves', 'picture' => 'tea_leaves.jpg', 'benefits' => ['Rich in antioxidants', 'Promotes heart health', 'Contains catechins and polyphenols']]], 'calories' => 2],
//     ['name' => 'Soda', 'price' => 1.50, 'img' => 'soda.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Carbonated water', 'picture' => 'carbonated_water.jpg', 'benefits' => ['Provides hydration']]], 'calories' => 150],
//     ['name' => 'Juice', 'price' => 3.00, 'img' => 'juice.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Fruit juice', 'picture' => 'fruit_juice.jpg', 'benefits' => ['Rich in vitamins', 'Provides essential nutrients']]], 'calories' => 120],
//     ['name' => 'Mokhito', 'price' => 5.00, 'img' => 'mokhito.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Rum', 'picture' => 'rum.jpg', 'benefits' => ['May help relax', 'Provides a sense of enjoyment']]], 'calories' => 250],
//     ['name' => 'Zaezae', 'price' => 10.00, 'img' => 'zaezae.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Special blend of ingredients', 'picture' => 'zaezae_ingredients.jpg', 'benefits' => ['Energizing', 'Refreshing']]], 'calories' => 180],
//     ['name' => 'Energy Drinks', 'price' => 8.00, 'img' => 'energy.png', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Caffeine', 'picture' => 'caffeine.jpg', 'benefits' => ['Provides energy boost']]], 'calories' => 110],
//     ['name' => 'Lemonade', 'price' => 2.50, 'img' => 'lemonade.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Lemons', 'picture' => 'lemons.jpg', 'benefits' => ['Rich in vitamin C', 'Provides hydration']]], 'calories' => 100],
//     ['name' => 'Smoothie', 'price' => 4.00, 'img' => 'smoothie.jpg', 'category_id' => $drinkId, 'desc' => '', 'ingredients' => [['name' => 'Fruits and vegetables', 'picture' => 'smoothie_ingredients.jpg', 'benefits' => ['Rich in vitamins and minerals', 'Provides dietary fiber']]], 'calories' => 150],

//     //'Sandwich':
//     ['name' => 'BLT', 'price' => 7.50, 'img' => 'blt.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Bacon', 'picture' => 'bacon.jpg', 'benefits' => ['Good source of protein', 'Contains essential amino acids', 'Rich in B vitamins']]]],
//     ['name' => 'Grilled Cheese', 'price' => 6.00, 'img' => 'grilled_cheese.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Cheese', 'picture' => 'cheese.jpg', 'benefits' => ['High in calcium', 'Good source of protein']]]],
//     ['name' => 'Club', 'price' => 9.00, 'img' => 'club.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Turkey', 'picture' => 'turkey.jpg', 'benefits' => ['Good source of lean protein', 'Rich in vitamins B6 and B12']]]],
//     ['name' => 'Reuben', 'price' => 8.50, 'img' => 'reuben.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Corned beef', 'picture' => 'corned_beef.jpg', 'benefits' => ['High in protein', 'Rich in iron']]]],
//     ['name' => 'Philly Cheesesteak', 'price' => 10.00, 'img' => 'philly_cheesesteak.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Beef steak', 'picture' => 'beef_steak.jpg', 'benefits' => ['Excellent source of protein', 'Rich in iron']]]],
//     ['name' => 'French Dip', 'price' => 9.50, 'img' => 'french_dip.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Roast beef', 'picture' => 'roast_beef.jpg', 'benefits' => ['High in protein', 'Good source of iron']]]],
//     ['name' => 'Meatball Sub', 'price' => 8.50, 'img' => 'meatball_sub.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Meatballs', 'picture' => 'meatballs.jpg', 'benefits' => ['Good source of protein', 'Rich in vitamins and minerals']]]],
//     ['name' => 'Panini', 'price' => 7.00, 'img' => 'panini.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Ham', 'picture' => 'ham.jpg', 'benefits' => ['Good source of protein', 'Rich in vitamins and minerals']]]],
//     ['name' => 'Croissant Sandwich', 'price' => 6.50, 'img' => 'croissant_sandwich.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Ham', 'picture' => 'ham.jpg', 'benefits' => ['Good source of protein', 'Rich in vitamins and minerals']]]],
//     ['name' => 'Chicken Salad Sandwich', 'price' => 7.50, 'img' => 'chicken_salad_sandwich.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Chicken', 'picture' => 'chicken.jpg', 'benefits' => ['Good source of lean protein', 'Rich in vitamins and minerals']]]],
//     ['name' => 'Grilled Chicken Sandwich', 'price' => 8.00, 'img' => 'grilled_chicken_sandwich.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Grilled chicken', 'picture' => 'grilled_chicken.jpg', 'benefits' => ['Good source of lean protein', 'Low in fat']]]],
//     ['name' => 'Turkey Sandwich', 'price' => 7.50, 'img' => 'turkey_sandwich.jpg', 'category_id' => $sandwichId, 'desc' => '', 'ingredients' => [['name' => 'Turkey', 'picture' => 'turkey.jpg', 'benefits' => ['Good source of lean protein', 'Rich in vitamins B6 and B12']]]],

//     // Food
//     ['name' => 'Pizza', 'price' => 12.00, 'img' => 'pizza.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Dough', 'picture' => 'dough.jpg', 'benefits' => ['Source of carbohydrates']]], 'calories' => 285],
//     ['name' => 'Burger', 'price' => 8.00, 'img' => 'burger.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Beef patty', 'picture' => 'beef_patty.jpg', 'benefits' => ['Good source of protein', 'Contains essential amino acids']]], 'calories' => 350],
//     ['name' => 'Salad', 'price' => 6.50, 'img' => 'salad.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Mixed greens', 'picture' => 'mixed_greens.jpg', 'benefits' => ['Rich in vitamins and minerals', 'Provides dietary fiber']]], 'calories' => 150],
//     ['name' => 'Pasta', 'price' => 9.00, 'img' => 'pasta.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Durum wheat', 'picture' => 'durum_wheat.jpg', 'benefits' => ['Source of carbohydrates', 'Provides energy']]], 'calories' => 200],
//     ['name' => 'Sandwich', 'price' => 7.50, 'img' => 'sandwich.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Bread', 'picture' => 'bread.jpg', 'benefits' => ['Source of carbohydrates', 'Provides dietary fiber']]], 'calories' => 300],
//     ['name' => 'Sushi', 'price' => 15.00, 'img' => 'sushi.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Rice', 'picture' => 'rice.jpg', 'benefits' => ['Source of carbohydrates', 'Low in fat']]], 'calories' => 250],
//     ['name' => 'Chicken Wings', 'price' => 10.00, 'img' => 'chicken_wings.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Chicken wings', 'picture' => 'chicken_wings.jpg', 'benefits' => ['Good source of protein', 'Contains essential amino acids']]], 'calories' => 400],
//     ['name' => 'French Fries', 'price' => 4.50, 'img' => 'french_fries.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Potatoes', 'picture' => 'potatoes.jpg', 'benefits' => ['Source of carbohydrates', 'Contains dietary fiber']]], 'calories' => 365],
//     ['name' => 'Ice Cream', 'price' => 3.50, 'img' => 'ice_cream.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Milk', 'picture' => 'milk.jpg', 'benefits' => ['Source of calcium', 'Contains vitamins']]], 'calories' => 250],
//     ['name' => 'Steak', 'price' => 20.00, 'img' => 'steak.jpg', 'category_id' => $foodId, 'desc' => '', 'ingredients' => [['name' => 'Beef steak', 'picture' => 'beef_steak.jpg', 'benefits' => ['Good source of protein', 'Contains essential amino acids']]], 'calories' => 500],

//     //'Breakfast':
//     ['name' => 'Eggs Benedict', 'price' => 9.00, 'img' => 'eggs_benedict.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Eggs', 'picture' => 'eggs.jpg', 'benefits' => ['Good source of protein', 'Contains essential vitamins and minerals']]]],
//     ['name' => 'Banane Pancake', 'price' => 6.50, 'img' => 'pancakes.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Banana', 'picture' => 'banana.jpg', 'benefits' => ['Rich in potassium', 'Good source of dietary fiber']]]],
//     ['name' => 'Waffles', 'price' => 7.50, 'img' => 'waffles.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Waffle mix', 'picture' => 'waffle_mix.jpg', 'benefits' => ['Provides carbohydrates for energy']]]],
//     ['name' => 'Bacon and Eggs', 'price' => 8.50, 'img' => 'bacon_and_eggs.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Eggs', 'picture' => 'eggs.jpg', 'benefits' => ['Good source of protein', 'Contains essential vitamins and minerals']], ['name' => 'Bacon', 'picture' => 'bacon.jpg', 'benefits' => ['Provides protein and fat', 'Rich in flavor']]]],
//     ['name' => 'Omelette', 'price' => 9.00, 'img' => 'omelette.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Eggs', 'picture' => 'eggs.jpg', 'benefits' => ['Good source of protein', 'Contains essential vitamins and minerals']], ['name' => 'Vegetables', 'picture' => 'vegetables.jpg', 'benefits' => ['Provides vitamins and dietary fiber']]]],
//     ['name' => 'Avocado Toast', 'price' => 7.00, 'img' => 'avocado_toast.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Avocado', 'picture' => 'avocado.jpg', 'benefits' => ['Rich in healthy fats', 'Provides vitamins and minerals']], ['name' => 'Bread', 'picture' => 'bread.jpg', 'benefits' => ['Source of carbohydrates']]]],
//     ['name' => 'Breakfast Burrito', 'price' => 8.00, 'img' => 'breakfast_burrito.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Tortilla', 'picture' => 'tortilla.jpg', 'benefits' => ['Provides carbohydrates']], ['name' => 'Eggs', 'picture' => 'eggs.jpg', 'benefits' => ['Good source of protein', 'Contains essential vitamins and minerals']], ['name' => 'Bacon', 'picture' => 'bacon.jpg', 'benefits' => ['Provides protein and fat', 'Rich in flavor']], ['name' => 'Vegetables', 'picture' => 'vegetables.jpg', 'benefits' => ['Provides vitamins and dietary fiber']]]],
//     ['name' => 'Muffin', 'price' => 3.00, 'img' => 'muffin.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Muffin mix', 'picture' => 'muffin_mix.jpg', 'benefits' => ['Provides carbohydrates', 'Can be customized with various flavors']]]],
//     ['name' => 'Granola Bowl', 'price' => 6.50, 'img' => 'granola_bowl.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Granola', 'picture' => 'granola.jpg', 'benefits' => ['Provides carbohydrates', 'Contains nuts and seeds for added nutrients']], ['name' => 'Yogurt', 'picture' => 'yogurt.jpg', 'benefits' => ['Good source of protein and calcium']]]],
//     ['name' => 'Bagel with Cream Cheese', 'price' => 4.50, 'img' => 'bagel_with_cream_cheese.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Bagel', 'picture' => 'bagel.jpg', 'benefits' => ['Provides carbohydrates']], ['name' => 'Cream Cheese', 'picture' => 'cream_cheese.jpg', 'benefits' => ['Source of fat and flavor']]]],
//     ['name' => 'French Toast', 'price' => 7.00, 'img' => 'french_toast.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'Bread', 'picture' => 'bread.jpg', 'benefits' => ['Provides carbohydrates']], ['name' => 'Eggs', 'picture' => 'eggs.jpg', 'benefits' => ['Good source of protein', 'Contains essential vitamins and minerals']], ['name' => 'Milk', 'picture' => 'milk.jpg', 'benefits' => ['Source of calcium and protein']]]],
//     ['name' => 'English Muffin', 'price' => 2.50, 'img' => 'english_muffin.jpg', 'category_id' => $breakfastId, 'desc' => '', 'ingredients' => [['name' => 'English Muffin', 'picture' => 'english_muffin.jpg', 'benefits' => ['Provides carbohydrates']]]]

// ];
