import React from 'react'
import {VscPass , VscWorkspaceTrusted} from 'react-icons/vsc'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {RiCustomerService2Line} from 'react-icons/ri'
const Features = () => {
  return (
    <div className='flex flex-wrap w-[80%] gap-4 lg:gap-0 lg:w-[66.66%] my-9 justify-between text-zinc-800 dark:text-white'>
        <div className='flex items-center gap-2'>
            <VscPass className='text-4xl font-extralight dark:text-white'/>
            <div className=''>
                <h3 className='text-sm font-semibold'>High Quality</h3>
                <p className='text-xs'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <VscWorkspaceTrusted className='text-4xl font-extralight dark:text-white'/>
            <div className=''>
                <h3 className='text-sm font-semibold'>Warrany Protection</h3>
                <p className='text-xs'>Over 2 years</p>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <LiaShippingFastSolid className='text-4xl font-extralight dark:text-white'/>
            <div className=''>
                <h3 className='text-sm font-semibold'>Free Shipping</h3>
                <p className='text-xs'>Order over 150 $</p>
            </div>
        </div>

        <div className='flex items-center gap-2'>
            <RiCustomerService2Line className='text-4xl font-extralight dark:text-white'/>
            <div className=''>
                <h3 className='text-sm font-semibold'>24 / 7 Support</h3>
                <p className='text-xs'>Dedicated support</p>
            </div>
        </div>

        
    </div>
  )
}

export default Features