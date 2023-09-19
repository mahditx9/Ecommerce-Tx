import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useShopCard } from "../../contexts/shopCard";
function CartStatus() {
  const { onOpen, count, totalPrice } = useShopCard();
  return (
    <div
      onClick={onOpen}
      className="flex items-center gap-x-3 relative cursor-pointer"
    >
      <span className="font-bold text-textSecondary">
        ${totalPrice.toFixed(2)}
      </span>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="relative text-[22px] text-textSecondary"
      />
      <span className="absolute -right-2 -top-2 text-textPrimary bg-red-700 p-[3px] leading-3 text-center w-[18px] h-[18px] rounded-[50%]">
        {count}
      </span>
    </div>
  );
}

export default CartStatus;
