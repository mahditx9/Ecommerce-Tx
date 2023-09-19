/* eslint-disable react/prop-types */
import { FaMagnet, FaShoppingBasket } from "react-icons/fa";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import Button from "../UI/Button";
import { useShopCard } from "../../contexts/shopCard";
import { memo } from "react";

const Product = memo(function Product({ product }) {
  const { id, title, price, image, rating } = product;
  const { rate } = rating;
  const { onAdd } = useShopCard();

  const handleClick = () => {
    onAdd(product);
  };

  return (
    <Link to={`product/${id}?`}>
      <div className={styles.productCard}>
        <div className="flex justify-between px-2 items-center">
          <FaShoppingBasket className="cursor-pointer" />
          <FaMagnet className="cursor-pointer" />
        </div>
        <img
          src={image}
          className="w-[200px] h-[200px] mx-auto object-fit mt-3 "
          alt="Product Image"
        />
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-center font-bold dark:text-textPrimary">
          {title}
        </h3>
        <div className={`${styles.flexBetween}  px-7`}>
          <span className="dark:text-textPrimary">${price}</span>
          <Rating rate={rate} />
        </div>
        <Button style=" w-[80%] mx-auto z-999 " onClick={handleClick}>
          Add To Card
        </Button>
      </div>
    </Link>
  );
});
export default Product;
