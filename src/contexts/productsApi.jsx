/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useReducer } from "react";

const initial = {
  products: [],
  product: {},
  isLoading: false,
  error: "",
};

const productsReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "products/loaded":
      return { ...state, products: action.payload, isLoading: false };
    case "product/loaded":
      return { ...state, product: action.payload, isLoading: false };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("UNKNOWN ACTION!");
  }
};

const productsApi = createContext();

function ProductsApi({ children }) {
  const [{ products, product, isLoading, error }, dispatch] = useReducer(
    productsReducer,
    initial
  );

  const getProducts = useCallback(async () => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch({ type: "products/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }, []);

  const getProduct = useCallback(async (id) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      dispatch({ type: "product/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }, []);

  const getInCategory = useCallback(async (category, limit) => {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}${
          limit && `?limit=${limit}`
        }`
      );
      const data = await response.json();
      dispatch({ type: "products/loaded", payload: data });
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }, []);

  const value = {
    isLoading,
    error,
    products,
    singleProduct: product,
    getProduct,
    getProducts,
    getInCategory,
  };

  return <productsApi.Provider value={value}>{children}</productsApi.Provider>;
}

const useProducts = () => {
  const context = useContext(productsApi);
  if (context === undefined) {
    throw new Error("Context used outside of provider!");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { ProductsApi, useProducts };
