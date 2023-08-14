import { useEffect, useState } from "react";
import Button from "../common/Button";
import ListofFilters from "../common/ListofFilters";
import CardsList from "../productsPage/CardsList";
import {useSelector , useDispatch} from 'react-redux'
import { getProducts } from "../../store/features/ProductsSlice";
import {ThreeDots} from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
const NewArrivals = () => {
  const navigate = useNavigate()
  const {loading , Filter  , products } = useSelector(state=>state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts({page : 1 , cat : Filter || null}))
  },[Filter])

  return (
    <div className="w-[80%] lg:w-[66.66%] lg:my-12 flex gap-5 flex-col items-center ">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-zinc-800 dark:text-zinc-300">New Arrivals</h1>
        <p className="lg:w-[50%] text-center text-xs text-zinc-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptas, nihil deleniti accusamus?
        </p>
      </div>
      <ListofFilters />
      {loading && <div className="w-full grid h-60 items-center">
          <ThreeDots color="grey" wrapperClass="w-[20%] mx-auto" />
        </div>}
      {!loading && <CardsList cards={products.slice(0 ,6)}/>}
      {!loading && <div>
        {loading &&<Button handler={()=>navigate("/products")} className="w-44" text={'View More'} w={44} />}
      </div>}
    </div>
  );
};

export default NewArrivals;
