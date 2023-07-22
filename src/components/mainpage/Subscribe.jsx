import React from 'react'
import sub1 from '../../assets/imgs/sub1.png'
import sub2 from '../../assets/imgs/sub2.png'
import Button from '../common/Button'

const Subscribe = () => {
  return (
    <div className= 'lg:w-[66.66%] flex items-center items-center mb-12 '>
        <div className='w-[40%]'>
        <img className='w-[100%] hidden lg:block' src={sub1} />
        </div>
        <div className='flex flex-col justify-center text-center '>
            <h1 className='lg:text-3xl text-2xl mb-2 font-bold text-zinc-800 dark:text-zinc-300'>Subscribe To Our Newsletter</h1>
            <p className='text-center mx-auto p-2 text-xs pb-4 text-zinc-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
            <input type='text' className='outline-none mb-5 mx-auto w-[90%] bg-white dark:bg-zinc-800 drop-shadow-2xl h-10 rounded-lg p-3 ' placeholder='michael@ymail.com'/>
            <div className='lg:w-[30%]  mx-auto'>
            <Button text={'Subscribe Now'} w={12}/>
            </div>
        </div>
        <div className='w-[40%]'>
        <img className='w-[100%] hidden lg:block' src={sub2} />
        </div>
    </div>
  )
}

export default Subscribe