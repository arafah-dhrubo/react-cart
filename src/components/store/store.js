import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import compareReducer from './compareSlice';
import wishlistReducer from './wishlistSlice';
import productReducer from './productSlice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        compare:compareReducer,
        wishlist:wishlistReducer,
        product:productReducer,
    }
})

export default store;