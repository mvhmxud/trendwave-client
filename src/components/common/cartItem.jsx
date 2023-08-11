import React  ,{useEffect,useState}from "react";
import { MdDelete } from "react-icons/md";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { increament, decreament, deleteProduct, changeQty } from "../../store/features/CartSlice";

const CartItem = ({_id , title , price ,image ,quantity}) => {
  const [value , setValue] = useState(quantity)
  const dispatch = useDispatch()
  const deleteProductHandler = ()=>{
    dispatch(deleteProduct({_id : _id, price :price , qty :quantity }))
  }

  useEffect(()=>{
    setValue(quantity)
  },[quantity])
  return (
    <div className="lg:p-4 flex flex-col lg:flex-row  justify-between items-center w-full gap-3 lg:gap-0  border-b-[1px] dark:border-b-zinc-500">
      <img src={'http://localhost:5000'+image} className="lg:w-[10%] rounded-md " />
      <div className="flex flex-col lg:w-[40%]">
        <span>{title}</span>
        <span className="text-xs text-zinc-500">TrendWave</span>
      </div>
      <div className="flex items-center justify-between">
        <span onClick={()=>{dispatch(decreament(_id))}} className="text-xl font-medium cursor-pointer">-</span>
        <input
          className="w-[30%] dark:bg-zinc-800 border-[1px] rounded-lg text-center"
          type="number"
          value={value}
          min={1}
          max={99}
          maxLength={2}
          size={2}
          pattern="[0-9][0-9]*"
          onBlur={(e)=>{dispatch(changeQty({_id : _id , qty : +e.target.value , price : price}))}}
          onChange={(e) =>setValue((v) => (e.target.validity.valid ? e.target.value : v))}
          name="quantity"
        />
        <span onClick={()=>{dispatch(increament(_id))}} className="text-xl font-medium cursor-pointer">+</span>
      </div>
      <div className="">${price}</div>
      <MdDelete onClick={deleteProductHandler} className="text-xl mb-1 text-red-600 cursor-pointer" />
    </div>
  );
};

export default CartItem;
