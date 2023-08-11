import React, { useState, useEffect } from "react";
import Navigation from "../components/common/navigation";
import Footer from "../components/common/footer";
import CartButton from "../components/common/CartButton";
import ListofFilters from "../components/common/ListofFilters";
import CardsList from "../components/common/CardsList";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, setFilter } from "../store/features/ProductsSlice";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../components/common/Pagination";
import { TbError404 } from "react-icons/tb";
const Products = ({ cartHandler }) => {
  const [p, setP] = useSearchParams();
  const navigate = useNavigate();
  const { loading, products, Filter , currentPage , totalNumberOfPages } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const [selected, setSelected] = useState("All");
  
  
  useEffect(() => {
    if (+p.get("p") > totalNumberOfPages) {
      navigate("/products");
    }
    dispatch(getProducts({page : +p.get("p") || 1 , cat : Filter}));
  }, [p , Filter]);
  
  
  return (
    <div className="w-[100vw] min-h-screen relative flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white ">
      {/* justify-between is temp till we fill the page */}
      <Navigation />
      <div
        className={`mt-10 ${
          loading && "grid"
        } min-h-[65vh] w-[80%] lg:w-[70%] `}
      >
        {
          <div className="w-[80%] place-self-start mx-auto">
            <ListofFilters />
          </div>
        }
        {!loading && !products  &&  (
          <div className="w-full h-[62vh] grid place-content-center">
            <TbError404 className="text-9xl" />
            <h1>Found No Products </h1>
          </div>
        )}
        {loading && <ThreeDots wrapperClass="w-[20%] mx-auto" color="grey" />}
        {!loading && products && <CardsList cards={products} />}
      </div>
      {!loading && products && currentPage && <Pagination />}
      <CartButton cartHandler={cartHandler} />
      <Footer />
    </div>
  );
};

export default Products;
