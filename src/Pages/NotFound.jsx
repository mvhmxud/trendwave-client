import React from 'react'
import Button from '../components/common/Button'
import {useNavigate } from 'react-router-dom'
import img1 from '../assets/imgs/4041.png'
import img2 from '../assets/imgs/4042.png'

const NotFound = () => {
  const navigate =  useNavigate()
  return (
    <div className='w-[100vw] h-screen relative flex flex-col items-center bg-white dark:bg-zinc-950 transition-colors ease-in-out duration-500 dark:text-white justify-center'>
    <div className='flex w-screen h-screen justify-center items-center'>
        <div className='flex relative h-[80%] flex-col items-center justify-center'>
            <div className='text-8xl  font-bold flex h-28 items-start'>
                <span className='z-10'>4</span>
                <span className='self-end '>0</span>
                <span className='z-10'>4</span>
                <img className='absolute lg:top-[27%] lg:left-[25%] w-[20%]' src={img1}/>
                <img className='absolute lg:top-[29%] right-28 lg:right-[24%] w-[18%]' src={img2}/>
            </div>
            <h2 className='font-semibold'>Page not Found</h2>
            <p className='text-xs my-3 w-[85%] text-center'>The page you are trying to reach is not available. It may have been deleted or its URL was misspelled.</p>
            <Button handler={()=>{navigate(-1)}}  text={"Go Back"}/>
        </div>

    </div>
    </div>
  )
}

export default NotFound