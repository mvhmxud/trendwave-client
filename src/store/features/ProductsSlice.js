import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const host = "localhost";

function shuffleArray(array) {
  const arr = array;
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  currentPage: null,
  totalNumberOfPages: null,
  cart: {},
  categories: null,
  Filter: null,
  filterLoading: false,
};

export const getProducts = createAsyncThunk(
  "getProducts",
  ({ page, cat }, { rejectWithValue }) => {
    return axios
      .get(`http://${host}:5000/products`, {
        params: {
          page: page,
          cat: cat,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

export const getCategories = createAsyncThunk(
  "getCategories",
  (args, { rejectWithValue }) => {
    return axios
      .get(`http://${host}:5000/products/category`)
      .then((res) => res.data.categories)
      .catch((err) => rejectWithValue(err));
  }
);

export const getProduct = createAsyncThunk(
  "getProduct",
  (id, { rejectWithValue }) => {
    return axios
      .get(`http://${host}:5000/products/${id}`)
      .then((response) => response.data.product)
      .catch((err) => {
        return rejectWithValue(err);
      });
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.Filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.product = null;
      state.products = [];
      state.currentPage = null
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = shuffleArray(action.payload.products);
      state.currentPage = action.payload.currentPage;
      state.totalNumberOfPages = action.payload.totalPages;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data.message;
      state.products = [];
      toast(state.error, { type: "error" });
    });
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = null;
      state.error = action.payload.response.data.message;
      toast(state.error, { type: "error" });
    });
    builder.addCase(getCategories.pending, (state) => {
      state.filterLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.filterLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.filterLoading = false;
      state.categories = null;
      state.error = action.payload.response.data.message;
    });
  },
});

export default ProductSlice.reducer;
export const { setFilter } = ProductSlice.actions;
