import {FaCartShopping} from 'react-icons/fa6'
const CartButton = () => {
  return (
    <div className='w-10 h-10 cursor-pointer grid place-items-center text-xl text-white fixed top-[82%] right-[3%] dark:bg-zinc-800 bg-black rounded-lg ' >
        <FaCartShopping/>
    </div>
  )
}

export default CartButton