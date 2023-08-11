import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Pagination = () => {
    const {currentPage , totalNumberOfPages } = useSelector(state=>state.products)
  return (
    <div className="lg:w-[10%] w-[60%] items-center flex justify-around my-5 text-2xl mx-auto">
      { currentPage > 1 ? <Link to={`?p=${+currentPage-1}`}>
        <MdOutlineNavigateBefore className="cursor-pointer" />
      </Link> : <MdOutlineNavigateBefore className="text-zinc-500" />}
      <div
        to={`?p=${1}`}
        className="bg-black hover:bg-black hover:text-white transition-colors ease-linear cursor-pointer  text-white w-8 text-center rounded-md p-1 text-base"
      >
        {currentPage}
      </div>
      {currentPage < totalNumberOfPages ? <Link to={`?p=${+currentPage+1}`}>
        <MdOutlineNavigateNext className="cursor-pointer" />
      </Link> : <MdOutlineNavigateNext className="text-zinc-500" /> }
    </div>
  );
};

export default Pagination;
