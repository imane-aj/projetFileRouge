import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
    }
})
export default store