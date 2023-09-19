import { Route, Routes, BrowserRouter } from "react-router-dom";

import Products from "./components/Products/Products";

import ShopLayout from "./pages/ShopLayout";
import Home from "./pages/Home";
import { ProductsApi } from "./contexts/productsApi";
import ProductPage from "./pages/ProductPage";
import { ShopCard } from "./contexts/shopCard";
import LoginPage from "./pages/LoginPage";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <ShopCard>
      <ProductsApi>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<ShopLayout />}>
                <Route index element={<Products />} />
                <Route path="product/:id" element={<ProductPage />} />
              </Route>
              <Route path="blog" element={<h1>Blog</h1>} />
              <Route path="contact" element={<h1>Contact</h1>} />
              <Route path="cart" element={<h1>Cart</h1>} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<h1>not found!</h1>} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </ProductsApi>
    </ShopCard>
  );
}

export default App;
