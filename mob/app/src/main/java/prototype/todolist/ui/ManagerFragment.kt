package prototype.todolist.ui


import LoginFragmentDirections
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.activity.viewModels
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import androidx.navigation.findNavController
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import prototype.todolist.R
import prototype.todolist.dao.MealDao
import prototype.todolist.databinding.FragmentManagerBinding
import prototype.todolist.repositories.MealRepository
import prototype.todolist.utils.Status


class ManagerFragment : BaseFragment<FragmentManagerBinding>(FragmentManagerBinding::inflate) {

    private val viewModel: MealViewModel by viewModels()
    private lateinit var adapter: MealAdapter
    private var isLoggedIn: Boolean = false
    private val authViewModel: AuthViewModel by activityViewModels() // Shared ViewModel

    override fun init(view: View) {
        this.setProgressBar(R.id.progressBar)
        adapter =  MealAdapter(arrayListOf(), view.findNavController(), authViewModel, MealRepository(), MealDao())
        binding.apply {
            recyclerView.layoutManager = GridLayoutManager(context, 2)
            recyclerView.adapter =  adapter
        }
        // getMeals observe
        viewModel.getMeals().observe(viewLifecycleOwner, Observer {
            when (it.status) {
                Status.LOADING -> this.showProgressBar()
                Status.ERROR -> this.showResponseError(it.message.toString())
                Status.SUCCESS -> {
                    binding.recyclerView.visibility = View.VISIBLE
                    binding.progressBar.visibility = View.GONE
                    adapter.apply {
                        addMeals(it.data!!)
                        notifyDataSetChanged()
                    }
                }
            }
        })

        authViewModel.token.observe(viewLifecycleOwner, Observer { token ->
            // Token value has changed, do something with it
            Log.d("token", token.orEmpty())
            // Example: Make an API call with the token
            // mealRepository.makeApiCallWithToken(token)
        })

    }

//
    override fun listeners(view: View) {

    }

    override fun onCreateOptionsMenu(menu: Menu, inflater: MenuInflater) {
        inflater.inflate(R.menu.menu, menu)
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            R.id.login -> {
                val action = ManagerFragmentDirections.actionManagerFragmentToLoginFragment()
                findNavController().navigate(action)
                return true
            }
            R.id.panier -> {
                val action = ManagerFragmentDirections.actionManagerFragmentToPanierFragment(id)
                findNavController().navigate(action)
                return true
            }
            else -> return super.onContextItemSelected(item)
        }
        
    }
}