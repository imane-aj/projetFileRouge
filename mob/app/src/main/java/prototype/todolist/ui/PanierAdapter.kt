package prototype.todolist.ui

import android.content.Context
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageButton
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
import prototype.todolist.model.Cart
import prototype.todolist.model.Meal
import prototype.todolist.repositories.MealRepository


class PanierAdapter(
    private val carts: ArrayList<Cart>,
    navController: NavController,
    private val authViewModel: AuthViewModel,
    private val mealRepository: MealRepository,
    private val mealDao: MealDao
) : RecyclerView.Adapter<PanierAdapter.DataViewHolder>() {

    private val navController = navController

    class DataViewHolder(private val view: View) : RecyclerView.ViewHolder(view) {
        val mealName: TextView = view.findViewById<Button>(R.id.namePan)
        val mealImg: ImageView = view.findViewById<ImageView>(R.id.imagePan)
        val delete: AppCompatImageButton = view.findViewById(R.id.delete)

        fun bind(cart: Cart) {
            mealName.text = cart.name
            val imageUrl = "http://192.168.2.3:8000/images/products/${cart.img}"
            Log.d("img", cart.img.toString())
            Picasso.get().load(imageUrl).into(mealImg)
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DataViewHolder {
        val layout = LayoutInflater.from(parent.context)
            .inflate(R.layout.panier_item, parent, false)
        return DataViewHolder(layout)
    }

    override fun onBindViewHolder(dataViewHolder: DataViewHolder, position: Int) {
        val cart = carts[position]
        dataViewHolder.bind(cart)

        dataViewHolder.delete.setOnClickListener {
            Log.d("hello", "fromdelet")
            val context = dataViewHolder.itemView.context
            val isLoggedIn = authViewModel.getLoggedIn()
            Log.d("hello", isLoggedIn.toString())
            if (isLoggedIn) {
                // User is logged in, show data added message
                val token = authViewModel.getToken() // Retrieve token from AuthViewModel
                Log.d("token", token.toString())
                CoroutineScope(Dispatchers.Main).launch {
                    try {
                        val response = mealDao.deleteCart("Bearer $token", cart.id)
                        Log.d("response", response.toString())
                        if (response.isSuccessful) {
                            val responseObject = response.body()
                            if (responseObject != null) {
                                // Handle the response JSON object here
                                // Example: Check if the response indicates success or failure
                                val success = responseObject.get("success").asBoolean
                                if (success) {
                                    removeCart(position) // Remove the cart object from the list
                                    showToast(context, "The cart was deleted successfully")
                                } else {
                                    showToast(context, "Failed to delete the cart")
                                }
                            } else {
                                showToast(context, "Empty response received from the server")
                            }
                        } else {
                            showToast(context, "Request failed: ${response.code()}")
                        }
                    } catch (e: Exception) {
                        showToast(context, "An error occurred: ${e.message}")
                        Log.d("error", e.message.toString())
                    }
                }
            }
        }
    }

    override fun getItemCount(): Int = carts.size

    fun addPanier(carts: List<Cart>) {
        this.carts.apply {
            clear()
            addAll(carts)
        }
    }

    private fun removeCart(position: Int) {
        carts.removeAt(position)
        notifyItemRemoved(position)
        notifyItemRangeChanged(position, itemCount)
    }


    private fun showToast(context: Context, message: String) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }
}