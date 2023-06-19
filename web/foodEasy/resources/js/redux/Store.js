import { configureStore} from '@reduxjs/toolkit';
import ToggleReducer from './ToggleSlice'
import ApiReducer from './ApiSlice'
import CategoryReducer from './CategorySlice';
import ProductReducer from './ProductSlice';
import CartReducer from './CartSlice';
import CheckoutReducer from './CheckoutSlice';
import TrackingReducer from './TrackingSlice';
import StatisticReducer from './StatisticSlice';

const store = configureStore({reducer:
    {
     toggle : ToggleReducer,
     api : ApiReducer,
     category : CategoryReducer,
     product : ProductReducer,
     cart : CartReducer,
     checkout : CheckoutReducer,
     tracking : TrackingReducer,
     statistic : StatisticReducer,
    }
})
export default store