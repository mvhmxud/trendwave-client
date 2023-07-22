import React from 'react'
import prod1 from '../../assets/imgs/prod1.png'
import {AiFillStar} from "react-icons/ai"
const ProductCard = ({product}) => {
  return (
    <div className=' flex gap-2 flex-col justify-between p-4 w-[80%] lg:w-[30%] rounded-lg bg-zinc-50 dark:bg-zinc-800'>
        <img src={product?.img}  />
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h3 className='capitalize dark:text-white'>{product?.title}</h3>
                <span className='text-xs font-light text-zinc-400'>{product?.by}</span>
            </div>
            <div className='flex text-yellow-400'>
                {[1,2,3,4,5].map(item=><AiFillStar/>)}
            </div>
        </div>
        <div className='text-xs dark:text-white'>
            {product?.customerReviews}
        </div>
        <div className='flex justify-between'>
            <span className='dark:text-white'>{product?.price}</span>
            <span className='captialize text-xs text-red-500'>{product?.availability}</span>
        </div>
    </div>
  )
}

export default ProductCard