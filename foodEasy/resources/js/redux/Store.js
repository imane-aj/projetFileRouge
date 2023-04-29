import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
    }
})
export default store