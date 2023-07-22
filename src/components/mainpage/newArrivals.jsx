import { useState } from "react";
import Button from "../common/Button";
import ListofFilters from "../common/ListofFilters";
import CardsList from "../common/CardsList";

const NewArrivals = () => {
  const [selected , setSelected] = useState(null)
  const SelectFilterHandler=(filter)=>{
    setSelected(filter)
  }
  const productCards = [
    {
      title: "Shiny Dress",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img :"https://i.ibb.co/sH44NbQ/prod1.png",
      availability: "Almost Sold Out"
    },
    {
      title: "Long Dress",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img:"https://i.ibb.co/SNbtFN7/prod2.png",
      availability: "Almost Sold Out"
    },
    {
      title: "Full Sweater",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img:"https://i.ibb.co/drM6mj0/prod3.png",
      availability: "Almost Sold Out"
    },
    {
      title: "White Dress",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img:"https://i.ibb.co/6HW8N49/prod4.png",
      availability: "Almost Sold Out"
    },
    {
      title: "Colorful Dress",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img:"https://i.ibb.co/8Pkjpcp/prod5.png",
      availability: "Almost Sold Out"
    },
    {
      title: "White Shirt",
      by: "Al Karam",
      customerReviews: "(4.1k) Customer Reviews",
      price: "$95.50",
      img :"https://i.ibb.co/4Rg1gSK/prod6.png",
      availability: "Almost Sold Out"
    }
  ];
  
  const FilterList = [
    "Men's Fashion",
    "Women's Fashion",
    "Men Accessories",
    "Women Accessories",
    "Discount Deals",
  ];
  return (
    <div className="w-[80%] lg:w-[66.66%] lg:my-12 flex gap-5 flex-col items-center ">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-zinc-800 dark:text-zinc-300">New Arrivals</h1>
        <p className="lg:w-[50%] text-center text-xs text-zinc-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptas, nihil deleniti accusamus?
        </p>
      </div>
      <ListofFilters selected={selected} list={FilterList} handler={SelectFilterHandler}/>
      <CardsList cards={productCards}/>
      <div>
        <Button className="w-44" text={'View More'} w={44} />
      </div>
    </div>
  );
};

export default NewArrivals;
