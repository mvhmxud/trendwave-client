import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/common/navigation";
import Footer from "../components/common/footer";
import CartButton from "../components/common/CartButton";
import Button from "../components/common/Button";
import {useSelector , useDispatch} from 'react-redux'
import { getProduct } from "../store/features/ProductsSlice";
import { ThreeDots } from "react-loader-spinner";
import {TbError404} from 'react-icons/tb'
import { addProduct } from "../store/features/CartSlice";
const Product = ({ cartHandler }) => {
  const {loading  , product , error} = useSelector(state=>state.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [src, setSrc] = useState(product?.images[0] || null);
  const { id } = useParams();
  
  const AddToCartHandler=()=>{
    dispatch(addProduct(product))
  }
  
  useEffect(() => {
    dispatch(getProduct(id))
    setSrc('http://localhost:5000'+product?.images[1])
    return(setSrc())
  }, []);
  return (
    <div className="w-[100vw] min-h-screen relative flex gap-5 flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white ">
      {/* justify-between is temp till we fill the page */}
      <Navigation />
      {loading && <div className="w-full grid content-center h-[80vh]">
        <ThreeDots color="grey" wrapperClass="w-[20%] mx-auto"/>  
      </div>}
      {!loading && product && <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row w-[80%] lg:w-[70%] justify-between">
        <div className="lg:w-[35%] flex flex-col items-center gap-5">
          <img className="w-[100%] rounded-lg" src={src || `http://localhost:5000`+product?.images[0]} />
          <div className="w-[100%] flex justify-around">
           {product?.images.map((image , index)=>{
            return  <img
            key={index}
            onMouseOver={(e) => setSrc(e.target.src)}
            className="w-[22%] hover:brightness-90 transition-all ease-in duration-100 rounded-lg cursor-pointer"
            src={`http://localhost:5000`+image}
          />
           })}
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col justify-between gap-3 p-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium">{product?.title}</h1>
            <span>{product?.category.title}</span>
            <span className="text-xl font-semibold">${product?.price}</span>
            <p className="text-sm mt-5 ">
            {product?.description}
            </p>
          </div>

          <Button handler={AddToCartHandler} text={"Add to Cart"} w={"[100%]"} />
        </div>
      </div>}
      {error &&  <div className="w-full h-[62vh] grid place-content-center">
        <TbError404 className="text-9xl"/>
        <h1>Product Not Found </h1>
      </div> }
      <CartButton cartHandler={cartHandler} />
      <Footer />
    </div>
  );
};

export default Product;
