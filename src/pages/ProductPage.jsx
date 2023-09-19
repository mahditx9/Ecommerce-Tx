import { useParams } from "react-router-dom";
import SingleProduct from "../components/Product/SingleProduct";
import AbsPath from "../components/UI/AbsPath";
import ProductsInCategory from "../components/Products/ProductsInCategory";
import Comments from "../components/Comments/Comments";
function ProductPage() {
  const { id } = useParams();
  return (
    <>
      <section className="flex px-7 py-3 ss:flex-row-reverse flex-col-reverse ">
        <div
          // ${styles.flexCenter} flex-col
          className={`flex flex-col gap-5 ss:w-[70%] ss:mx-auto w-full  overflow-hidden rounded-2xl py-2`}
        >
          <AbsPath>{`Shop/Product/${id}`}</AbsPath>
          <SingleProduct />
          <ProductsInCategory />
          <Comments />
        </div>
      </section>
    </>
  );
}

export default ProductPage;
