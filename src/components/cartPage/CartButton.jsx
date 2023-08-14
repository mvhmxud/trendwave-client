import { useState, useEffect } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const CartButton = () => {
  const { items } = useSelector((state) => state.cart);
  const [pop, setPop] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (items.length > 0) {
      setPop(true);

      const timer = setTimeout(() => {
        setPop(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [items.length]);
  return (
    <div
      onClick={() => navigate("/cart")}
      className="w-10 h-10 cursor-pointer grid place-items-center text-xl text-white fixed top-[82%] right-[3%] dark:bg-zinc-800 bg-black rounded-lg "
    >
      <div className="w-full h-full grid place-content-center relative">
        {items.length > 0 && (
          <div
            className={`w-4 h-4 ${
              pop ? "popup" : ""
            } text-xs text-center absolute bg-red-700 rounded-full right-0 top-[-9px]`}
          >
            {items.length}
          </div>
        )}
        <FaCartShopping />
      </div>
    </div>
  );
};

export default CartButton;
