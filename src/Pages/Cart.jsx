import React , {useEffect} from "react";
import Navigation from "../components/ui/navigation";
import Footer from "../components/ui/footer";
import CartItem from "../components/cartPage/cartItem";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { goToCheckout} from "../store/features/CartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, price } = useSelector((state) => state.cart);
  const { user, isAuthed } = useSelector((state) => state.auth);
  

  const checkoutHandler = async () => {
    if (!isAuthed) {
      toast("you must be signed in first", {
        type: "warning",
      });
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
    }
    dispatch(goToCheckout({ items, user }));
  };
  return (
    <div className="w-[100vw] min-h-screen relative gap-5 flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white ">
      <Navigation />
      <div className="lg:w-[66.66%] gap-3 flex flex-col min-h-[70vh] rounded-2xl ">
        <div className="lg:w-[100%] mx-auto w-[90%] p-8 flex flex-col gap-3 rounded-lg dark:bg-zinc-800 bg-zinc-50">
          <h1 className="font-medium text-lg">Shopping Cart</h1>
          <div className="h-full max-h-[80vh] lg:max-h-[50vh] scroll overflow-y-auto w-full p-9 flex flex-col gap-3 ">
            {items.length < 1 && (
              <div className="mx-auto text-xl my-10 font-semibold">
                Cart is empty !
              </div>
            )}
            {items?.map((item) => (
              <CartItem
                key={item._id}
                _id={item._id}
                title={item.title}
                quantity={item.qty}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <div className=" flex lg:flex-row flex-col items-center lg:gap-0 gap-2 mt-5 justify-between">
            <div>
              <span className="font-medium">Total</span>: ${price}
            </div>
            <button
              disabled={items.length < 1 ? true : false}
              onClick={checkoutHandler}
              className="p-2 drop-shadow-lg disabled:bg-zinc-600 disabled:text-zinc-400 disabled:cursor-not-allowed bg-black text-white font-light rounded-lg"
            >
              Checkout with Stripe
            </button>
          </div>
        </div>
        {/* <div className='lg:w-[100%] flex flex-col p-8 mx-auto w-[90%] rounded-lg dark:bg-zinc-800 bg-zinc-50' >
                <h1 className='font-medium text-lg'>Order Details</h1>
            </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
