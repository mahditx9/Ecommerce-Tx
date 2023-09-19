/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useProducts } from "../../contexts/productsApi";
import Product from "./Product";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";
import Filter from "../Filter/Filter";
function Products() {
  const { products, getProducts, isLoading, error } = useProducts();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (isLoading) return <Spinner />;
  if (error) return <Message message={error} />;
  return (
    <div className="flex flex-col">
      <Filter />
      <div className="flex flex-wrap justify-center items-center  gap-6 ">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
