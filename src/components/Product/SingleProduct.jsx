/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Rating";
import { styles } from "../../styles";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import Message from "../UI/Message";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../redux/productsSlice";
// ----------------------------------------------------
function SingleProduct() {
  // ----------------------------------------------------

  const { id: urlID } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading, error } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getSingleProduct(urlID));
  }, [dispatch, urlID]);

  // ----------------------------------------------------
  const {
    id,
    title,
    price,
    description,
    image,
    rating = { rate: "N/A", count: "N/A" },
  } = product;
  const rate = rating.rate;
  const count = rating.count;

  // ----------------------------------------------------
  if (isLoading) return <Spinner />;
  if (error)
    return <Message message="There is an error while loading this product " />;
  return (
    <div
      className={`flex flex-col bg-white ${styles.singleCard}  md:h-[63%] ss:h-[75%] `}
    >
      <div className=" ss:mx-auto">
        <img
          src={image}
          className="h-[30vh] ss:h-[40vh] w-full object-contain"
          alt="product image"
        />
      </div>
      <div className={`${styles.flexCenter} gap-2 flex-col`}>
        <h2 className="font-bold text-center">{title}</h2>
        {/* <Rating rate={rate} /> */}
      </div>
      <p className="text-center px-6">{description}</p>
      <div className={`inventory ${styles.flexBetween}  flex-col gap-y-3`}>
        <div
          className={`w-full ss:${styles.flexCenter} ${styles.flexBetween} px-6 mt-3`}
        >
          <label className="text-[18px]">Price :</label>
          <span>${price}</span>
        </div>
        <div
          className={`w-full ss:${styles.flexCenter} ${styles.flexBetween} px-6`}
        >
          <label className="text-[18px]">Inventory :</label>
          {/* <span>{count}</span> */}
        </div>
        <div
          className={`w-full ss:${styles.flexCenter} ${styles.flexBetween} px-6`}
        >
          <label htmlFor="count" className="text-[18px]">
            Count :{" "}
          </label>
          <input
            id="count"
            type="number"
            defaultValue={1}
            className="w-[25%]  text-center outline-none border-none rounded-sm bg-green-500 focus:bg-green-400 text-textSecondary  text-[17px] tracking-wide"
          />
        </div>
      </div>
      <Button onClick={() => {}} style="w-[80%] ss:w-[50%] mx-auto mt-3">
        Add To Card
      </Button>
    </div>
  );
}

export default SingleProduct;
