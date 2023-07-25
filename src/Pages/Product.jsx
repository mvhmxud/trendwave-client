import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/common/navigation";
import Footer from "../components/common/footer";
import CartButton from "../components/common/CartButton";
const Product = () => {
  const { id } = useParams();
  return (
    <div className='w-[100vw] min-h-screen relative flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white justify-between '>
      {/* justify-between is temp till we fill the page */}
      <Navigation/>
      <h1>Product {id} Page</h1>
      <CartButton/>
      <Footer/>
    </div>
  );
};

export default Product;
