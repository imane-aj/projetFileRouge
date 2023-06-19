package prototype.todolist.model

data class LoginResponse(
    val access_token: String,
    val user: Map<String, Any>,
)
