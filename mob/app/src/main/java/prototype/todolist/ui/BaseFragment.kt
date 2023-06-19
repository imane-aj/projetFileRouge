package prototype.todolist.ui

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.Menu
import android.view.MenuInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ProgressBar
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.viewbinding.ViewBinding
import prototype.todolist.R


typealias Inflater<T> = (inflater: LayoutInflater, view: ViewGroup?, attach: Boolean) -> T

abstract class BaseFragment<VB: ViewBinding>(private val inflater: Inflater<VB>) : Fragment() {

    private var _binding: VB? = null
    protected val binding get() = _binding!!
    private var progressBar: ProgressBar? = null

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?,
    ): View? {
        _binding = this.inflater.invoke(inflater, container, false)
        setHasOptionsMenu(true)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        init(view)
        listeners(view)

    }

    abstract fun listeners(view: View)

    abstract fun init(view: View)

    protected open fun observers() {}


    fun setProgressBar(resId: Int) {
        progressBar = view?.findViewById(resId)
    }

    fun showProgressBar() {
        progressBar?.visibility = View.VISIBLE
    }

    fun hideProgressBar() {
        progressBar?.visibility = View.INVISIBLE
    }


    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

    protected open fun showResponseError(message : String){
        this.hideProgressBar()
        Log.d("meal",message )
        Toast.makeText(activity, message, Toast.LENGTH_LONG).show()
    }
}