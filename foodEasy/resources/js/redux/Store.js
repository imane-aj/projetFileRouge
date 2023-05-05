import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'
import CategoryReducer from './CategorySlice';
import ProductReducer from './ProductSlice';

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
     category : CategoryReducer,
     product : ProductReducer,
    }
})
export default store