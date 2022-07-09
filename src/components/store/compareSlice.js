import { toast } from "react-toastify";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  compareItems: localStorage.getItem("compareItems")
    ? JSON.parse(localStorage.getItem("compareItems"))
    : [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addCompare(state, action) {
      const exist = state.compareItems.findIndex(
        (item) => item.id===action.payload.id
      );

      if (exist>=0) {

        toast.error("Already added in compare", {
          position: "bottom-left",
        });
      } else {
        state.compareItems.push(action.payload);
        
        toast.success("Product added to compare", {
          position: "bottom-left",
        });
    }
    localStorage.setItem(
      "compareItems",
      JSON.stringify(state.compareItems)
    );
    },
    removeCompare(state, action) {
      state.compareItems.map((compareItem) => {
        if (compareItem.id === action.payload) {
          const compareList = state.compareItems.filter(
            (item) => item.id !== compareItem.id
          );

          state.compareItems = compareList;

          toast.error("Product removed from Compare List", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("compareItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    clear(state) {
      state.compareItems = [];
      localStorage.removeItem("compareItems");
      toast.error("Compare List Cleared", {
        position: "bottom-left",
      });
      return state;
    },
  },
});

export const { addCompare, removeCompare, clear } = compareSlice.actions;

export default compareSlice.reducer;
