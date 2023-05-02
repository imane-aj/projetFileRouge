import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'
import CategoryReducer from './CategorySlice';

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
     category : CategoryReducer,
    }
})
export default store