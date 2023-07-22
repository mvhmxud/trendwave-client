import React from 'react'

import ins1 from '../../assets/imgs/ins1.png'
import ins2 from '../../assets/imgs/ins2.png'
import ins3 from '../../assets/imgs/ins3.png'
import ins4 from '../../assets/imgs/ins4.png'
import ins5 from '../../assets/imgs/ins5.png'
import ins6 from '../../assets/imgs/ins6.png'
import ins7 from '../../assets/imgs/ins7.png'
const FollowUs = () => {
  return (
    <div className='flex flex-col text-center mt-7 w-[80%] lg:w-[70%] lg:gap-12 gap-6'>
      <div>
      <h1 className='lg:text-3xl text-2xl mb-2 font-bold text-zinc-800 dark:text-zinc-300'>Follow Us on Instagram</h1>
      <p className='text-center mx-auto p-2 lg:w-[40%] text-xs text-zinc-500'>
        Lorem ipsum dolor, sit amet consectetur adipisicing.
        Explicabo esse delectus quasi corrupti ducimus molestias?
      </p>
      </div>
      <div className='grid lg:grid-cols-7 grid-cols-5 items-center'>
        <img className='' src={ins1}/>
        <img className='' src={ins2}/>
        <img className='' src={ins3}/>
        <img className='' src={ins4}/>
        <img className='' src={ins5}/>
        <img className='hidden lg:block' src={ins6}/>
        <img className='hidden lg:block' src={ins7}/>
      </div>
    </div>
  )
}

export default FollowUs