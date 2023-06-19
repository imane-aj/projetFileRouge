<?php

namespace Database\Factories;

use App\Models\Employe;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employe>
 */
class EmployeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Employe::class;
    public function definition()
    {
        static $count = 0;
        $employes = [
            ['firstName' => 'Ahmed','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
            ['firstName' => 'Mustapha','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
            ['firstName' => 'Alae','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
            ['firstName' => 'Reda','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
            ['firstName' => 'Youssef','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
            ['firstName' => 'Youness','lastName' =>  fake()->name(),'picture' =>  fake()->imageUrl() ,  'matricule' => Str::random(10),'phone'=>'0696738593'],
        ];
        $employe = $employes[$count % count($employes)];
        $count++;

        return $employe;
    }
}
