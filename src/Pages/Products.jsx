import React from 'react'
import Navigation from '../components/common/navigation'
import Footer from '../components/common/footer'
import CartButton from '../components/common/CartButton'

const Products = () => {
  return (
    <div className='w-[100vw] min-h-screen relative flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white justify-between '>
      {/* justify-between is temp till we fill the page */}
      <Navigation/>
      <h1>Products Page</h1>
      <CartButton/>
      <Footer/>
    </div>
  )
}

export default Products