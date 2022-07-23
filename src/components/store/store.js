import {configureStore} from '@reduxjs/toolkit';

import cartReducer from './cartSlice';
import compareReducer from './compareSlice';
import wishlistReducer from './wishlistSlice';
import productReducer from './productSlice';
import RecentViewReducer from './recentViewSlice';

const store = configureStore({
    reducer:{
        cart:cartReducer,
        compare:compareReducer,
        wishlist:wishlistReducer,
        product:productReducer,
        recentView:RecentViewReducer,
    }
})

export default store;