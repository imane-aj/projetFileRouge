package prototype.todolist.ui

import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.widget.AppCompatImageButton
import androidx.cardview.widget.CardView
import androidx.navigation.NavController
import androidx.recyclerview.widget.RecyclerView
import com.squareup.picasso.Picasso
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import prototype.todolist.R
import prototype.todolist.dao.MealDao
import prototype.todolist.model.Meal
import prototype.todolist.repositories.MealRepository

class MealAdapter(private val meals: ArrayList<Meal>, navController: NavController ,

                  private val authViewModel: AuthViewModel,
                  private val mealRepository: MealRepository,
                  private val mealDao: MealDao
    )
    : RecyclerView.Adapter<MealAdapter.DataViewHolder>() {

    private val navController = navController
    class DataViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val mealName: TextView = view.findViewById<Button>(R.id.namePan)
        val mealPrice: TextView = view.findViewById<Button>(R.id.pricePan)
        val mealImg: ImageView = view.findViewById<ImageView>(R.id.imagePan)
        val add: AppCompatImageButton  = view.findViewById(R.id.add)
        val cardView: CardView = view.findViewById(R.id.cardview)
        fun bind(meal: Meal) {
            mealName.text = meal.name
            mealPrice.text = meal.price.toString()
            // Load image using Picasso
            val imageUrl = "http://192.168.2.3:8000/images/products/${meal.img}"
            Log.d("img", meal.img.toString())
            Picasso.get().load(imageUrl).into(mealImg)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DataViewHolder {
        val layout = LayoutInflater
            .from(parent.context)
            .inflate(R.layout.task_item, parent, false)
        return DataViewHolder(layout)
    }

    override fun getItemCount(): Int  = meals.size

    override fun onBindViewHolder(dataViewHolder: DataViewHolder, position: Int) {

        val meal = meals[position]
        dataViewHolder.bind(meal)

        dataViewHolder.add.setOnClickListener {
            val context = dataViewHolder.itemView.context
            val isLoggedIn = authViewModel.getLoggedIn()
            if (isLoggedIn) {
                // User is logged in, show data added message
                val token = authViewModel.getToken() // Retrieve token from AuthViewModel
                val userId = authViewModel.getUserId()
                Log.d("userId", userId.toString())
                Log.d("token", token.toString())
                CoroutineScope(Dispatchers.Main).launch {
                    try {
                        val response = mealDao.addToCart("Bearer $token", meal.id, userId)
                        Log.d("response", response.toString())
                        if (response.isSuccessful) {
                            val cartResponse = response.body()
                            if (cartResponse != null) {
                                showToast(context, "The meal was added successfully")
                                Log.d("response", cartResponse.toString())
                            }else {
                                showToast(context, "Empty response received from the server")
                            }
                        } else {
                            showToast(context, "Failed to add the meal to the cart")
                        }
                    } catch (e: Exception) {
                        showToast(context, "An error occurred: ${e.message}")
                        Log.d("error", e.message.toString())
                    }
                }
            } else {
                // User is not logged in, show login message
                showToast(context, "Please login to add meal")
                val action = ManagerFragmentDirections.actionManagerFragmentToLoginFragment()
                navController.navigate(action)
            }
        }
    }

    fun addMeals(meals: List<Meal>) {
        this.meals.apply {
            clear()
            addAll(meals)
        }
    }

    private fun showToast(context: Context, message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }

}