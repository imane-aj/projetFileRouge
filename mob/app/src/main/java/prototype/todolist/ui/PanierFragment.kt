package prototype.todolist.ui
//
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.widget.AppCompatImageButton
import androidx.fragment.app.activityViewModels
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import androidx.navigation.findNavController
import androidx.navigation.fragment.findNavController
import androidx.navigation.fragment.navArgs
import androidx.recyclerview.widget.GridLayoutManager
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import prototype.todolist.R
import prototype.todolist.dao.MealDao
import prototype.todolist.databinding.FragmentPanierBinding
import prototype.todolist.repositories.MealRepository
import prototype.todolist.utils.Status


class PanierFragment : BaseFragment<FragmentPanierBinding>(FragmentPanierBinding::inflate) {

    private lateinit var viewModel: CartViewModel
    private lateinit var adapter: PanierAdapter
    private var isLoggedIn: Boolean = false
    private val authViewModel: AuthViewModel by activityViewModels() // Shared ViewModel

    override fun init(view: View) {
        val mealRepository = MealDao()
        val token = authViewModel.getToken() ?: ""
        viewModel = CartViewModel(mealRepository, token)

        this.setProgressBar(R.id.progressBar)
        adapter =  PanierAdapter(arrayListOf(), view.findNavController(), authViewModel, MealRepository(), MealDao())
        binding.apply {
            recyclerPanier.layoutManager = LinearLayoutManager(context)
            recyclerPanier.adapter =  adapter
        }

        //getFromCart
        viewModel.getCartItems().observe(viewLifecycleOwner, Observer {
            Log.d("cart product", it.data.toString())
            when (it.status) {
                Status.LOADING -> this.showProgressBar()
                Status.ERROR -> this.showResponseError(it.message.toString())
                Status.SUCCESS -> {
                    binding.recyclerPanier.visibility = View.VISIBLE
                    binding.progressBar.visibility = View.GONE
                    adapter.apply {
                        addPanier(it.data!!)
                        notifyDataSetChanged()
                    }
                }
            }
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
            else -> return super.onContextItemSelected(item)
        }

    }
}

