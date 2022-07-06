import { toast } from "react-toastify";
const { createSlice} = require('@reduxjs/toolkit');

const initialState={
    cartItems: localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
              if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                  ...state.cartItems[existingIndex],
                  cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info("Increased product quantity", {
                  position: "bottom-left",
                });
              } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success("Product added to cart", {
                  position: "bottom-left",
                });
              }
              localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
            increase(state, action) {
                const itemIndex = state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                  );
            
                  if (state.cartItems[itemIndex].cartQuantity >= 1) {
                    state.cartItems[itemIndex].cartQuantity += 1;
            
                    toast.info("Decreased product quantity", {
                      position: "bottom-left",
                    });
                  } 
                  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            },
            decrease(state, action) {
                const itemIndex = state.cartItems.findIndex(
                  (item) => item.id === action.payload.id
                );
          
                if (state.cartItems[itemIndex].cartQuantity > 1) {
                  state.cartItems[itemIndex].cartQuantity -= 1;
          
                  toast.info("Decreased product quantity", {
                    position: "bottom-left",
                  });
                } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                  const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                  );
          
                  state.cartItems = nextCartItems;
          
                  toast.error("Product removed from cart", {
                    position: "bottom-left",
                  });
                }
          
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
              },
            remove(state, action) {
                state.cartItems.map((cartItem) => {
                    if (cartItem.id === action.payload) {
                        const nextCartItems = state.cartItems.filter(
                            (item) => item.id !== cartItem.id
                            );
                            
                            state.cartItems = nextCartItems;
                            
                            toast.error("Product removed from cart", {
                                position: "bottom-left",
                            });
                        }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
              });
            },
        }
    }
);

export const { add, remove, increase, decrease, cartItems } = cartSlice.actions;

export default cartSlice.reducer;