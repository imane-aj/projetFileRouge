

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.fragment.app.activityViewModels
import androidx.navigation.fragment.findNavController
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import prototype.todolist.dao.MealDao
import prototype.todolist.databinding.FragmentLoginBinding
import prototype.todolist.model.LoginResponse
import prototype.todolist.ui.AuthViewModel
import prototype.todolist.ui.BaseFragment
import prototype.todolist.ui.ManagerFragmentDirections
import prototype.todolist.ui.MealAdapter
import retrofit2.Response

class LoginFragment : BaseFragment<FragmentLoginBinding>(FragmentLoginBinding::inflate) {

    private lateinit var mealDao: MealDao
    private val authViewModel: AuthViewModel by activityViewModels() // Shared ViewModel

    override fun init(view: View) {
        mealDao = MealDao()

        binding.login.setOnClickListener {
            performLogin()
        }
    }

    override fun listeners(view: View) {
        // No additional listeners required for this fragment
    }

    private fun performLogin() {
        val email = binding.email.text.toString().trim()
        val password = binding.password.text.toString().trim()

        if (email.isNotEmpty() && password.isNotEmpty()) {
            showProgressBar()

            GlobalScope.launch(Dispatchers.Main) {
                try {
                    val response: Response<LoginResponse> = mealDao.login(email, password)
                    Log.d("Response", response.body().toString())
                    if (response.isSuccessful) {
                        // Login successful, navigate to the next screen
                        hideProgressBar()
                        authViewModel.setLoggedIn(true)
                        val token = response.body()?.access_token
                        val userId = response.body()?.user?.get("id")?.toString()?.toDoubleOrNull()?.toInt()
                        //Log.d("user fromLogin", response.body()?.user.toString())
                        Log.d("userId fromLogin", userId.toString())
                        token?.let {
                            authViewModel.setLoggedIn(true)
                            authViewModel.setToken(it)
                        }
                        userId?.let {
                            authViewModel.setUserId(it)
                        }
                        val action = LoginFragmentDirections.actionLoginFragmentToManagerFragment()
                        findNavController().navigate(action)
                    } else {
                        // Login failed, show error message
                        hideProgressBar()
                        showResponseError("Login failed")
                    }
                } catch (e: Exception) {
                    // Exception occurred, show error message
                    hideProgressBar()
                    showResponseError("Logi n failed: ${e.message}")
                }
            }
        } else {
            Toast.makeText(activity, "Please enter email and password", Toast.LENGTH_SHORT).show()
        }
    }
}
