/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const shopCardContext = createContext();

const initial = {
  isOpen: false,
  products: [],
};

const shopReducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, isOpen: !state.isOpen };
    case "product/add":
      return { ...state, products: [...state.products, action.payload] };
    case "product/updated":
      return { ...state, products: [...action.payload] };
    default:
      throw new Error("UNKNOWN ACTION!");
  }
};

const ShopCard = ({ children }) => {
  const [{ isOpen, products }, dispatch] = useReducer(shopReducer, initial);
  const handleOpenClick = useCallback(() => {
    dispatch({ type: "open" });
  }, []);

  const addToCard = useCallback(
    (product) => {
      const isExist = products.some(
        (shopProduct) => shopProduct.id === product.id
      );
      if (isExist) return;
      dispatch({
        type: "product/add",
        payload: { ...product, count: 1 },
      });
    },
    [products]
  );
  const updateCard = useCallback(
    (id, count) => {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, count: count } : product
      );
      dispatch({ type: "product/updated", payload: updatedProducts });
    },
    [products]
  );

  const productsLength = products.length;
  const totalPrice = products.reduce((initial, cur) => {
    return (initial += cur.count * cur.price);
  }, 0);
  const value = {
    isOpen,
    onOpen: handleOpenClick,
    products,
    onAdd: addToCard,
    onUpdate: updateCard,
    count: productsLength,
    totalPrice,
  };
  return (
    <shopCardContext.Provider value={value}>
      {children}
    </shopCardContext.Provider>
  );
};

const useShopCard = () => {
  const context = useContext(shopCardContext);
  if (context === undefined) {
    throw new Error("Context used outside of provider!");
  }
  return context;
};

export { ShopCard, useShopCard };
