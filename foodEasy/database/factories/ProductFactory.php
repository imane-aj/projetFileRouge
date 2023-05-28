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
        $sandwichId  = Category::where('name', 'Sandwich')->first()->id;
        $drinkId  = Category::where('name', 'Drinks')->first()->id;
        // $products = [
        //     //drinks
        //     ['name' => 'Coffee', 'price' => 2.50, 'img' => 'coffee.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Tea', 'price' => 2.00, 'img' => 'tea.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Soda', 'price' => 1.50, 'img' => 'soda.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Juice', 'price' => 3.00, 'img' => 'juice.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Mokhito', 'price' => 5.00, 'img' => 'mokhito.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Zaezae', 'price' => 10.00, 'img' => 'zaezae.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Energy Drinks', 'price' => 8.00, 'img' => 'energy.png', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Lemonade', 'price' => 2.50, 'img' => 'lemonade.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Smoothie', 'price' => 4.00, 'img' => 'smoothie.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Milkshake', 'price' => 5.00, 'img' => 'milkshake.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Water', 'price' => 1.00, 'img' => 'water.jpg', 'category_id' => $drinkId, 'desc' => ''],
        //     ['name' => 'Iced Tea', 'price' => 2.50, 'img' => 'iced_tea.jpg', 'category_id' => $drinkId, 'desc' => ''],


        //     //'Sandwich':
        //     ['name' => 'BLT', 'price' => 7.50, 'img' => 'blt.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Grilled Cheese', 'price' => 6.00, 'img' => 'grilled_cheese.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Club', 'price' => 9.00, 'img' => 'club.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Reuben', 'price' => 8.50, 'img' => 'reuben.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Philly Cheesesteak', 'price' => 10.00, 'img' => 'philly_cheesesteak.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'French Dip', 'price' => 9.50, 'img' => 'french_dip.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Meatball Sub', 'price' => 8.50, 'img' => 'meatball_sub.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Panini', 'price' => 7.00, 'img' => 'panini.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Croissant Sandwich', 'price' => 6.50, 'img' => 'croissant_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Chicken Salad Sandwich', 'price' => 7.50, 'img' => 'chicken_salad_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Grilled Chicken Sandwich', 'price' => 8.00, 'img' => 'grilled_chicken_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],
        //     ['name' => 'Turkey Sandwich', 'price' => 7.50, 'img' => 'turkey_sandwich.jpg', 'category_id' => $sandwitchId, 'desc' => ''],

        //     //'Food':
        //     ['name' => 'Spaghetti', 'price' => 10.00, 'img' => 'spaghetti.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Lasagna', 'price' => 12.00, 'img' => 'lasagna.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Biriani', 'price' => 15.00, 'img' => 'birianu.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Burger', 'price' => 8.00, 'img' => 'burger.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Hot Dog', 'price' => 5.00, 'img' => 'hot_dog.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Taco', 'price' => 4.00, 'img' => 'taco.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Fried Chicken', 'price' => 10.00, 'img' => 'fried_chicken.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Tajin Meat', 'price' => 7.50, 'img' => 'tajin.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Sushi', 'price' => 12.00, 'img' => 'sushi.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Ramen', 'price' => 9.00, 'img' => 'ramen.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Stir Fry', 'price' => 11.00, 'img' => 'stir_fry.jpg', 'category_id' => $foodId, 'desc' => ''],
        //     ['name' => 'Pad Thai', 'price' => 12.00, 'img' => 'pad_thai.jpg', 'category_id' => $foodId, 'desc' => ''],

        //     //'Breakfast':
        //     ['name' => 'Eggs Benedict', 'price' => 9.00, 'img' => 'eggs_benedict.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Banane Pancake', 'price' => 6.50, 'img' => 'pancakes.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Waffles', 'price' => 7.50, 'img' => 'waffles.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Bacon and Eggs', 'price' => 8.50, 'img' => 'bacon_and_eggs.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Omelette', 'price' => 9.00, 'img' => 'omelette.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Avocado Toast', 'price' => 7.00, 'img' => 'avocado_toast.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Breakfast Burrito', 'price' => 8.00, 'img' => 'breakfast_burrito.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Muffin', 'price' => 3.00, 'img' => 'muffin.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Granola Bowl', 'price' => 6.50, 'img' => 'granola_bowl.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'Bagel with Cream Cheese', 'price' => 4.50, 'img' => 'bagel_with_cream_cheese.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'French Toast', 'price' => 7.00, 'img' => 'french_toast.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        //     ['name' => 'English Muffin', 'price' => 2.50, 'img' => 'english_muffin.jpg', 'category_id' => $breakfastId, 'desc' => '']
        // ];
        $products = [
            // Drinks
            ['name' => 'Almond Milk', 'price' => 2.50, 'img' => 'almond_milk.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Green Tea', 'price' => 2.50, 'img' => 'green_tea.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Herbal Tea', 'price' => 2.00, 'img' => 'herbal_tea.png', 'category_id' => $drinkId, 'desc' => ''],
        //['name' => 'Sparkling Water', 'price' => 1.50, 'img' => 'sparkling_water.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Fresh Orange Juice', 'price' => 3.00, 'img' => 'fresh_juice.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Fruit Smoothie', 'price' => 5.00, 'img' => 'fruit_smoothie.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Coconut Water', 'price' => 3.50, 'img' => 'coconut_water.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Vegetable Juice', 'price' => 4.50, 'img' => 'VegetableJuice.png', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Lemon Water', 'price' => 2.00, 'img' => 'lemon-cucumber-detox-3.jpg', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Strawberry Protein Shake', 'price' => 5.00, 'img' => 'recipe-Strawberry_Protein_Shake_With_Vanilla_Whipped_Cream-3.avif', 'category_id' => $drinkId, 'desc' => ''],
            ['name' => 'Iced Green Tea', 'price' => 3.00, 'img' => 'green-iced-tea_1200x1200.webp', 'category_id' => $drinkId, 'desc' => ''],
            //['name' => 'Water', 'price' => 1.00, 'img' => 'water.png', 'category_id' => $drinkId, 'desc' => ''],
        
            // Sandwiches
            ['name' => 'Grilled Chicken Wrap', 'price' => 8.00, 'img' => 'grilled_chicken_wrap.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Veggie Delight', 'price' => 7.50, 'img' => 'veggie_delight.webp', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Turkey and Avocado', 'price' => 9.00, 'img' => 'turkey_avocado_sandwich.webp', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Caprese Panini', 'price' => 8.50, 'img' => 'caprese_panini.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Hummus and Veggie Wrap', 'price' => 7.50, 'img' => 'hummus_veggie_wrap.webp', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Grilled Portobello Sandwich', 'price' => 9.50, 'img' => 'grilledportobellopita1.webp', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Egg Salad Lettuce Wrap', 'price' => 6.50, 'img' => 'egg_salad_lettuce_wrap.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Smoked Salmon Bagel', 'price' => 8.50, 'img' => 'smoked_salmon_bagel.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Chicken Caesar Wrap', 'price' => 7.00, 'img' => 'chicken_caesar_wrap.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Tuna Salad Lettuce Wrap', 'price' => 6.50, 'img' => 'tuna_salad_lettuce_wrap.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Grilled Veggie Panini', 'price' => 8.00, 'img' => 'grilled_veggie_panini.png', 'category_id' => $sandwichId, 'desc' => ''],
            ['name' => 'Avocado and Tomato Sandwich', 'price' => 7.50, 'img' => 'avocado_tomato_sandwich.png', 'category_id' => $sandwichId, 'desc' => ''],
        
            // Food
            ['name' => 'Moroccan Chicken Tajine', 'price' => 12.00, 'img' => 'Chicken-Tagine-with-Preserved-Onions-05-720x720.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Quinoa Salad with Grilled Chicken', 'price' => 12.00, 'img' => 'moroccan_quinoa_salad.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Vegetable Stir-Fry with Tofu', 'price' => 14.00, 'img' => 'moroccan_vegetable_stir_fry.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Grilled Salmon with Couscous', 'price' => 18.00, 'img' => 'moroccan_grilled_salmon.jfif', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Lamb Tagine with Lemon and Olives', 'price' => 11.00, 'img' => '200810-r-lamb-tagine-olive-498c1021c7774ec5a2f70a42fc720e63.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Vegan Burger with Quinoa Salad', 'price' => 10.00, 'img' => 'moroccan_vegan_burger.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Vegetable Curry with Basmati Rice', 'price' => 12.00, 'img' => 'moroccan_vegetable_curry.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Grilled Chicken Breast with Couscous', 'price' => 12.00, 'img' => 'moroccan_grilled_chicken_breast.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Cauliflower Rice Bowl with Lentils', 'price' => 10.00, 'img' => 'moroccan_cauliflower_rice_bowl.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Beef Tajine', 'price' => 13.00, 'img' => 'beef-and-pear-tagine-1316-1.jpeg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Mediterranean Plate with Grilled Lamb', 'price' => 15.00, 'img' => 'moroccan_mediterranean_plate.jpg', 'category_id' => $foodId, 'desc' => ''],
            ['name' => 'Moroccan Beef Daube', 'price' => 14.00, 'img' => 'MoroccanBeefDaube.jfif', 'category_id' => $foodId, 'desc' => ''],
         
            
        
            // Breakfast
            ['name' => 'Greek Yogurt Parfait', 'price' => 9.00, 'img' => 'greek_yogurt_parfait.webp', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Fruit Salad', 'price' => 6.50, 'img' => 'fruit_salad.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Egg White Omelette', 'price' => 7.50, 'img' => 'egg_white_omelette.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Veggie Breakfast Burrito', 'price' => 8.50, 'img' => 'veggie_breakfast_burrito.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Oatmeal with Berries', 'price' => 7.00, 'img' => 'oatmeal_with_berries.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Whole Wheat Toast with Almond Butter', 'price' => 8.00, 'img' => 'whole_wheat_toast_almond_butter.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Vegetable Frittata', 'price' => 6.00, 'img' => 'vegetable_frittata.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Chia Pudding', 'price' => 3.00, 'img' => 'chia_pudding.webp', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Egg and Avocado Toast', 'price' => 6.50, 'img' => 'egg_avocado_toast.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Protein Pancakes', 'price' => 4.50, 'img' => 'protein_pancakes.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Green Smoothie', 'price' => 7.00, 'img' => 'green_smoothie.jpg', 'category_id' => $breakfastId, 'desc' => ''],
            ['name' => 'Whole Wheat Banana Bread', 'price' => 2.50, 'img' => 'whole_wheat_banana_bread.jpg', 'category_id' => $breakfastId, 'desc' => ''],
        
            // // Snacks
            // ['name' => 'Mixed Nuts', 'price' => 4.00, 'img' => 'mixed_nuts.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Greek Yogurt', 'price' => 3.50, 'img' => 'greek_yogurt.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Hummus and Carrot Sticks', 'price' => 5.00, 'img' => 'hummus_carrot_sticks.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Edamame', 'price' => 3.00, 'img' => 'edamame.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Fruit and Nut Bars', 'price' => 2.50, 'img' => 'fruit_nut_bars.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Cottage Cheese with Berries', 'price' => 4.50, 'img' => 'cottage_cheese_berries.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Kale Chips', 'price' => 3.50, 'img' => 'kale_chips.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Rice Cakes with Almond Butter', 'price' => 3.50, 'img' => 'rice_cakes_almond_butter.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Yogurt Covered Pretzels', 'price' => 2.50, 'img' => 'yogurt_covered_pretzels.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Veggie Chips', 'price' => 3.00, 'img' => 'veggie_chips.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Trail Mix', 'price' => 4.00, 'img' => 'trail_mix.jpg', 'category_id' => $snackId, 'desc' => ''],
            // ['name' => 'Protein Bars', 'price' => 3.50, 'img' => 'protein_bars.jpg', 'category_id' => $snackId, 'desc' => ''],
        ];
        

        $product = $products[$count % count($products)];
        $count++;

        return $product;
    }
}

