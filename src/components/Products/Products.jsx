/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { getAllProducts } from "../../redux/productsSlice";
import Product from "./Product";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
function Products() {
  // -------------------------------
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  // -------------------------------
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
