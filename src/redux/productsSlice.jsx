import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    rejected: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    //get all products
    getAll: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    // get single product by id
    getSingle: (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loading, rejected } = productsSlice.actions;

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "products/loading" });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: "products/getAll", payload: data });
    } catch (error) {
      dispatch({ type: "products/rejected", payload: error.message });
    }
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: "products/loading" });
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      dispatch({ type: "products/getSingle", payload: data });
    } catch (error) {
      dispatch({ type: "products/rejected", payload: error.message });
    }
  };
};

export default productsSlice.reducer;
