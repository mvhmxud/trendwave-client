import React from 'react'
import prod1 from '../../assets/imgs/prod1.png'
import {AiFillStar} from "react-icons/ai"
import  {useNavigate} from 'react-router-dom'
const ProductCard = ({product}) => {
    const navigate = useNavigate()
  return (
    <div onClick={navigate.bind(this , `/products/${product._id}`)} className=' cursor-pointer flex gap-2 flex-col justify-between p-4 w-[80%] lg:w-[30%] rounded-lg bg-zinc-50 dark:bg-zinc-800'>
        <div className='w-full h-[70%] '>
        <img className='aspect-auto h-[100%] rounded-lg' src={`http://localhost:5000/${product?.images[0] }`}  />
        </div>
    
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h3 className='capitalize dark:text-white'>{product?.title}</h3>
                <span className='text-xs font-light text-zinc-400'>{product?.category.title}</span>
            </div>
            
        </div>
        <div className='text-xs dark:text-white'>
            {product?.customerReviews || '(4.1k) Customer Reviews'}
        </div>
        <div className='flex justify-between'>
            <span className='dark:text-white'>${product?.price}</span>
            <span className='captialize text-xs text-red-500'>{product?.availability || 'Almost Sold Out'}</span>
        </div>
    </div>
  )
}

export default ProductCard