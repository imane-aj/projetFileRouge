import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'
import CategoryReducer from './CategorySlice';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';
import CheckoutReducer from './CheckoutSlice';

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
     category : CategoryReducer,
     product : ProductReducer,
     cart : CartReducer,
     checkout : CheckoutReducer,
    }
})
export default store