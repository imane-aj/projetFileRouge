package prototype.todolist.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.liveData
import prototype.todolist.repositories.MealRepository
import prototype.todolist.utils.Resource

class MealViewModel : ViewModel() {

    private val mealRepository = MealRepository()

    fun getMeals() = liveData() {
        emit(Resource.loading(data = null))
        try {
            emit(Resource.success(data = mealRepository.getMeals()))
        } catch (exception: Exception) {
            emit(Resource.error(data = null, message = exception.message ?: "Error Occurred!"))
        }
    }

}