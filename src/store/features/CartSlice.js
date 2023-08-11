import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import getStripe from "../../utils/getStripe";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  price: JSON.parse(localStorage.getItem("cartPrice")) || 0,
  loading: false,
  error: false,
  checkout: false,
};

export const goToCheckout = createAsyncThunk(
  "checkout",
  async ({ items, user }, { rejectWithValue }) => {
    const stripe = await getStripe();
    const res = await fetch("http://localhost:5000/products/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
        email: user.email,
        address: user.address,
      }),
    });
    if (res.statusCode === 500)
      return rejectWithValue("Server side error occurred");

    const data = await res.json();
    console.log(data);
    toast.loading("Redirecting ...");
    stripe.redirectToCheckout({ sessionId: data.id });
  }
);

function editItemById(array, _id) {
  const updatedArray = array.map((item) => {
    if (item._id === _id) {
      // Merge the existing item with the updated properties
      return { ...item, qty: item.qty + 1 };
    }
    return item;
  });

  return updatedArray;
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.items = [];
      state.price = [];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
    addProduct: (state, action) => {
      let Existing;
      for (let item of state.items) {
        if (item._id === action.payload._id) {
          Existing = true;
        }
      }
      const product = {
        _id: action.payload._id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.images[0],
        qty: 1,
      };
      if (!Existing) {
        state.items = [...state.items, product];
      }

      if (Existing) {
        const updatedCart = editItemById(state.items, action.payload._id);
        state.items = updatedCart;
      }

      state.price += action.payload.price;
      toast(`${action.payload.title} added to cart `, {
        type: "success",
        position: "top-center",
        autoClose: 1000,
      });
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
    deleteProduct: (state, action) => {
      const updatedCart = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = updatedCart;
      state.price -= action.payload.price * action.payload.qty;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
    increament: (state, action) => {
      for (let item of state.items) {
        if (item._id === action.payload) {
          item.qty += 1;
          state.price += item.price;
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
    decreament: (state, action) => {
      for (let item of state.items) {
        if (item._id === action.payload) {
          if (item.qty > 1) {
            item.qty -= 1;
            state.price -= item.price;
          } else {
            const updatedCart = state.items.filter(
              (item) => item._id !== action.payload
            );
            state.items = updatedCart;
            state.price -= item.price;
          }
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
    changeQty: (state, action) => {
      if (action.payload.qty) {
        for (let item of state.items) {
          if (item._id === action.payload._id) {
            state.price -= item.price * item.qty;
            item.qty = action.payload.qty;
            state.price += item.price * item.qty;
          }
        }
      } else {
        let prevQty;
        const updatedCart = state.items.filter((item) => {
          if (item._id !== action.payload._id) {
            return item;
          } else {
            prevQty = item.qty;
          }
        });
        state.items = updatedCart;
        state.price -= action.payload.price * prevQty;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("cartPrice", JSON.stringify(state.price));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(goToCheckout.pending, (state, action) => {
      state.loading = true;
      state.checkout = false;
    });
    builder.addCase(goToCheckout.fulfilled, (state) => {
      state.checkout = true;
      state.loading = false;
    });
    builder.addCase(goToCheckout.rejected, (state) => {
      state.loading = false;
      toast.error("server error occurred while establishing the session");
    });
  },
});

export default CartSlice.reducer;
export const {
  addProduct,
  changeQty,
  emptyCart,
  increament,
  decreament,
  deleteProduct,
} = CartSlice.actions;
