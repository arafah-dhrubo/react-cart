const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  recentViewItems: sessionStorage.getItem("recentViewItems")
    ? JSON.parse(sessionStorage.getItem("recentViewItems"))
    : [],
};

const recentViewSlice = createSlice({
  name: "recentView",
  initialState,
  reducers: {
    addrecentView(state, action) {
      const exist = state.recentViewItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (exist >= 0) {
      } else {
        state.recentViewItems.push(action.payload);
      }
      sessionStorage.setItem(
        "recentViewItems",
        JSON.stringify(state.recentViewItems)
      );
    },
  },
});

export const { addrecentView} =
  recentViewSlice.actions;

export default recentViewSlice.reducer;
