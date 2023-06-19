package prototype.todolist.dao.api

import com.google.gson.JsonElement
import com.google.gson.JsonObject
import okhttp3.RequestBody
import prototype.todolist.model.Cart
import prototype.todolist.model.CartResponse
import prototype.todolist.model.LoginResponse
import retrofit2.Response
import retrofit2.http.Body
import retrofit2.http.DELETE
import retrofit2.http.GET
import retrofit2.http.Header
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

interface MealApiInterface {

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @GET("randomProduct")
    suspend fun getMeals(): Response<JsonObject>

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @POST("login")
    suspend fun login(@Body requestBody: RequestBody): Response<LoginResponse>


    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @POST("cart")
    suspend fun addToCart(
        @Header("Authorization") token: String?,
        @Query("product_id") productId: Int,
        @Query("user_id") userId: Int?
    ): Response<CartResponse>

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @GET("cart/product")
    suspend fun getFromCart(
        @Header("Authorization") token: String?
    ): Response<JsonObject>

    @Headers("api-password: Eld5TBhHgiIZgJk4c4VEtlnNxY")
    @DELETE("cart/{id}")
    suspend fun deleteCart(
        @Header("Authorization") token: String?,
        @Path("id") id: Int
    ): Response<JsonObject>

}