import React from 'react'
import ProductCard from './ProductCard'

const CardsList = ({cards}) => {
  return (
    <div className='my-5 flex w-full justify-around gap-y-5 flex-wrap'>
        {cards.map(product=><ProductCard product={product}/>)}
    </div>
  )
}

export default CardsList