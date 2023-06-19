package prototype.todolist.repositories

import prototype.todolist.dao.MealDao
import prototype.todolist.model.Cart
import prototype.todolist.model.LoginResponse
import retrofit2.Response

class MealRepository () {

    private val mealDao = MealDao()

    suspend fun getMeals() = mealDao.getMeals()
}