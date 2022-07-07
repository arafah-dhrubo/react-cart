import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import compareReducer from './compareSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        compare:compareReducer,
        product:productReducer,
    }
})

export default store;