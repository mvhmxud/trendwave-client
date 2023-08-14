import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { formatCreatedAt } from "../../utils/timeStamp";
const OrderTab = ({order}) => {
  const [opened, setOpened] = useState();
  return (
    <>
      <div className="w-full flex-wrap flex min-h-12 justify-between items-center p-2 rounded-md dark:bg-zinc-900 bg-zinc-200 mt-5">
        <div className="">#{order._id}</div>
        <div>Date : {formatCreatedAt(order.createdAt)}</div>
        <div>Price : ${order.price}</div>
        <div
          onClick={() => setOpened((prev) => !prev)}
          className="cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-400"
        >
          {!opened ? <FaChevronDown /> : <FaChevronUp />}
        </div>
      </div>
      {opened && (
        order.items.map((item,index)=>(<div key={index} className="w-full">
        <div className="flex gap-5 p-2">
          <span>#{index+1}</span>
          <span>{item.title} x{item.qty}</span>
        </div>
      </div>))
      )}
    </>
  );
};

export default OrderTab;
