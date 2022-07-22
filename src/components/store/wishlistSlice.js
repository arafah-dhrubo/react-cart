import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist(state, action) {
      const exist = state.wishlistItems.findIndex(
        (item) => item.id===action.payload.id
      );

      if (exist>=0) {

        toast.warning("Already added in Wishlist", {
          position: "bottom-left",
        });
      } else {
        state.wishlistItems.push(action.payload);
        
        toast.success("Product added to Wishlist", {
          position: "bottom-left",
        });
    }
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(state.wishlistItems)
    );
    },
    removeWishlist(state, action) {
      state.wishlistItems.map((wishlistItem) => {
        if (wishlistItem.id === action.payload.id) {
          const WishlistList = state.wishlistItems.filter(
            (item) => item.id !== wishlistItem.id
          );

          state.wishlistItems = WishlistList;

          toast.error("Product removed from Wishlist List", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
        return state;
      });
    },
    clear(state) {
      state.wishlistItems = [];
      localStorage.removeItem("wishlistItems");
      toast.error("Wishlist List Cleared", {
        position: "bottom-left",
      });
      return state;
    },
  },
});

export const { addWishlist, removeWishlist, clear } = wishlistSlice.actions;

export default wishlistSlice.reducer;
