import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'
import CategoryReducer from './CategorySlice';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
     category : CategoryReducer,
     product : ProductReducer,
     cart : CartReducer,
    }
})
export default store