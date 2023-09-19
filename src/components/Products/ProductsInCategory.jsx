import { useEffect } from "react";
import { useProducts } from "../../contexts/productsApi";
import { styles } from "../../styles";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";
import Product from "./Product";
function ProductsInCategory() {
  const { isLoading, error, singleProduct, getInCategory, products } =
    useProducts();
  useEffect(() => {
    getInCategory(singleProduct.category, 3);
  }, [singleProduct.category, getInCategory]);
  if (isLoading) return <Spinner />;
  if (error) return <Message message={error} />;
  return (
    <>
      <h2 className="text-textPrimary dark:text-textSecondary font-bold tracking-wide">
        Related Products
      </h2>
      <div
        className={`${styles.flexCenter} flex-col ss:flex-row  ${styles.singleCard} gap-4`}
      >
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsInCategory;
