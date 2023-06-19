package prototype.todolist.model

data class Cart(
    val id: Int,
    val qtity: Int?,
    val name: String?,
    val img: String?,
    val product_id: Int,
    val user_id: Int
)
