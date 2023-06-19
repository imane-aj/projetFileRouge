package prototype.todolist.dao
import android.util.Log
import androidx.navigation.navArgument
import prototype.todolist.dao.api.MealApiInterface
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import com.google.gson.Gson
import com.google.gson.JsonArray
import com.google.gson.JsonElement
import com.google.gson.JsonObject
import prototype.todolist.model.LoginResponse
import prototype.todolist.model.Meal
import retrofit2.Response
import okhttp3.RequestBody
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import prototype.todolist.model.Cart
import prototype.todolist.model.CartResponse


class MealDao {

    companion object {

        private var BASE_URL = "http://192.168.2.3:8000/api/"
        private val gson = Gson()

        private fun getRetrofit(): Retrofit {
            return Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .build() // Doesn't require the adapter
        }

        val apiService: MealApiInterface = getRetrofit().create(MealApiInterface::class.java)
    }

    suspend fun getMeals(): List<Meal> {
        val response: Response<JsonObject> = apiService.getMeals()
        Log.d(response.code().toString(), "Response Code")
        if (response.isSuccessful) {
            val responseBody: JsonObject? = response.body() as? JsonObject
            val dataObject: JsonObject? = responseBody?.getAsJsonObject("data")
            val mealsArray: JsonArray? = dataObject?.getAsJsonArray("data")

            val mealList = mutableListOf<Meal>()

            mealsArray?.forEach { jsonElement ->
                if (jsonElement.isJsonObject) {
                    val mealObject: JsonObject = jsonElement.asJsonObject
                    val id: Int? = mealObject.get("id")?.asInt
                    val name: String? = mealObject.get("name")?.asString
                    val price: Double? = mealObject.get("price")?.asDouble
                    val imageUrl: String? = mealObject.get("img")?.asString

                    if (id != null && name != null && price != null) {
                        val meal = Meal(id, name, price, imageUrl)
                        mealList.add(meal)
                    }
                }
            }

            return mealList
        }

        throw Exception("Failed to get meals")
    }

    suspend fun login(email: String, password: String): Response<LoginResponse> {
        val requestBody = createLoginRequestBody(email, password)
        return apiService.login(requestBody)
    }

    private fun createLoginRequestBody(email: String, password: String): RequestBody {
        val requestBodyJson = "{\"email\": \"$email\", \"password\": \"$password\"}"
        val mediaType = "application/json".toMediaTypeOrNull()
        return requestBodyJson.toRequestBody(mediaType)
    }

    suspend fun addToCart(token: String?, productId: Int, userId: Int?): Response<CartResponse> {
        return try {
            apiService.addToCart(token, productId, userId)
        } catch (e: Exception) {
            // Log the exception for debugging
            Log.e("addToCart", "An error occurred: ${e.message}", e)
            throw Exception("An error occurred while adding the meal to the cart: ${e.message}")
        }
    }

    suspend fun getCartItems(token: String): List<Cart> {
        val response: Response<JsonObject> = apiService.getFromCart("Bearer $token")
        Log.d(response.code().toString(), "Response Code")

        if (response.isSuccessful) {
            val responseData: JsonObject? = response.body()
            Log.d("cart product", responseData.toString())

            if (responseData?.getAsJsonArray("data") is JsonArray) {
                val mealList = mutableListOf<Cart>()

                val list = responseData.get("data").asJsonArray
                list.forEach { jsonElement ->
                    if (jsonElement.isJsonObject) {
                        val cartObject: JsonObject = jsonElement.asJsonObject
                        val id: Int = cartObject.get("id").asInt
                        val qtity: Int? = cartObject.get("qtity")?.asInt
                        val name: String? = cartObject.getAsJsonObject("product")?.get("name")?.asString
                        val img: String? = cartObject.getAsJsonObject("product")?.get("img")?.asString
                        val product_id: Int? = cartObject.getAsJsonObject("product")?.get("id")?.asInt
                        val user_id: Int? = cartObject.get("user_id")?.asInt

                        if (qtity != null && qtity != null && name != null  && img != null && product_id != null && user_id != null) {
                            val cart = Cart(id, qtity, name, img, product_id, user_id)
                            mealList.add(cart)
                        } else {
                            Log.e("Parsing Error", "One or more fields are null")
                        }
                    } else {
                        Log.e("Parsing Error", "JSON element is not a JsonObject")
                    }
                }

                return mealList
            } else {
                Log.e("Parsing Error", "Response body is not a JsonArray")
            }
        } else {
            Log.e("API Error", "Failed to fetch data from API")
        }

        throw Exception("Failed to get meals")
    }


    suspend fun deleteCart(token: String?, id: Int): Response<JsonObject> {
        val response: Response<JsonObject> = apiService.deleteCart("Bearer $token", id)
        Log.d("fromDao", response.toString())
        Log.d("fromDao Bearer", token.toString())
        Log.d("fromDaoid", id.toString())
        return try {
            response
        } catch (e: Exception) {
            // Log the exception for debugging
            Log.e("deleteCart", "An error occurred: ${e.message}", e)
            throw Exception("An error occurred while deleting the cart: ${e.message}")
        }
    }
}
