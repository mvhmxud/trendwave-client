import React ,{useEffect}from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../store/features/CartSlice";
const Success = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
    useEffect(()=>{
      dispatch(emptyCart())
        localStorage.removeItem('cartItems')
    },[])
  const handler = () => {
    navigate("/");
  };
  return (
    <div className="w-[100vw] min-h-screen relative gap-5 flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white ">
      <div className="lg:w-[70%] h-[100vh] gap-2 w-[80%] flex justify-center flex-col items-center">
        <AiOutlineCheckCircle className="text-8xl text-green-500" />
        <h2 className="w-[50%] text-center">
          Payment Successful ! Thank you for your purchase. Your payment has
          been successfully processed
        </h2>
        <Button text={"Explore More"} handler={handler} />
      </div>
    </div>
  );
};

export default Success;
