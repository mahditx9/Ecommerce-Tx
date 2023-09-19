import { memo, useState } from "react";
import { useShopCard } from "../../contexts/shopCard";

/* eslint-disable react/prop-types */
const ShopCardItem = memo(function ShopCardItem({ product }) {
  const [countValue, setCountValue] = useState(1);
  const { onUpdate } = useShopCard();
  const { id } = product;

  const handleDecrease = () => {
    if (countValue > 1) {
      setCountValue((prev) => prev - 1);
      onUpdate(id, countValue - 1);
    }
  };

  const handleIncrease = () => {
    if (countValue < 10) {
      setCountValue((prev) => prev + 1);
      onUpdate(id, countValue + 1);
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 10) {
      setCountValue(value);
      onUpdate(id, value);
    }
  };

  return (
    <li className="py-4 pb-6 flex justify-between  w-full items-center border-b-[1px] border-gray-400">
      <img
        className="h-[50px] w-[50px]"
        src={product.image}
        alt="product image"
      />
      <div>
        <span className="text-gray-400">{product.category}</span>
        <h3 className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[70px] text-textSecondary">
          {product.title}
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="outline-none text-textSecondary dark:text-textPrimary  px-2 font-bold rounded-md border-[1px] border-gray-400  "
          onClick={handleDecrease}
        >
          -
        </button>
        <input
          className="w-[50px] text-center text-textSecondary dark:text-textPrimary rounded-lg border-[1px] border-gray-400 mx-1 "
          type="number"
          min={1}
          max={10}
          value={countValue}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="outline-none text-textSecondary dark:text-textPrimary px-2  font-bold rounded-md border-[1px] border-gray-400  "
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <p className="text-textSecondary">
        {product.count
          ? `$${product.count * product.price}`
          : `$${product.price}`}
      </p>
    </li>
  );
});

export default ShopCardItem;
