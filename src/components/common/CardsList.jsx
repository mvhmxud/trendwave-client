import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const CardsList = ({cards}) => {
  const {Filter } = useSelector(state=>state.products)

  return (
    <div className='my-5 flex w-full justify-center gap-5 gap-y-5 flex-wrap'>
        {cards.map((product , index)=><ProductCard key={index}  product={product}/>)}
    </div>
  )
}

export default CardsList