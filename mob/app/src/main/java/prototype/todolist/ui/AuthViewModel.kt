package prototype.todolist.ui

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class AuthViewModel : ViewModel() {
    private val _isLoggedIn = MutableLiveData<Boolean>()
    val isLoggedIn: LiveData<Boolean> get() = _isLoggedIn

    private val _token = MutableLiveData<String>()
    val token: LiveData<String> get() = _token

    fun setLoggedIn(value: Boolean) {
        _isLoggedIn.value = value
    }
    fun getLoggedIn(): Boolean {
        return _isLoggedIn.value ?: false
    }

    fun setToken(token: String) {
        _token.value = token
    }

    fun getToken(): String? {
        return _token.value
    }

    //user id
    private val _userId = MutableLiveData<Int>()
    val userId: LiveData<Int> get() = _userId

    fun setUserId(userId: Int) {
        _userId.value = userId
    }

    fun getUserId(): Int? {
        return _userId.value
    }
}