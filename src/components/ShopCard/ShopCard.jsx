import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles";
import ShopCardItem from "./ShopCardItem";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useShopCard } from "../../contexts/shopCard";
import Button from "../UI/Button";
function ShopCard() {
  const { products, onOpen } = useShopCard();
  return (
    <div className="fixed z-50  top-[4rem] right-0 w-[27%] h-full bg-white py-4 px-4 rounded-l-md rounded-b-md">
      <FontAwesomeIcon
        icon={faClose}
        onClick={onOpen}
        className="absolute text-red-500 hover:text-red-700 text-[22px]"
      />
      <h2 className="text-center text-2xl text-textSecondary">Shop Card</h2>
      <ul className={`${styles.flexCenter} flex-col  h-full gap-y-4 mt-5 `}>
        {/* {Array.from({ length: 7 }, (_, i) => (
          <ShopCardItem key={i} product={i} />
        ))} */}
        {products.map((product) => (
          <ShopCardItem key={product.id} product={product} />
        ))}
        <Button style="w-[50%] py-[5px] mt-5">Go To Card</Button>
      </ul>
    </div>
  );
}

export default ShopCard;
