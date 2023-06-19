package prototype.todolist.ui

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.liveData
import prototype.todolist.dao.MealDao
import prototype.todolist.model.Cart
import prototype.todolist.repositories.MealRepository
import prototype.todolist.utils.Resource

class CartViewModel(
    private val mealRepository: MealDao,
    private val token: String
) : ViewModel() {

    fun getCartItems(): LiveData<Resource<List<Cart>>> = liveData {
        emit(Resource.loading(data = null))
        try {
            val cartItems = mealRepository.getCartItems(token)
            emit(Resource.success(data = cartItems))
        } catch (exception: Exception) {
            emit(Resource.error(data = null, message = exception.message ?: "Error Occurred!"))
        }
    }
}



