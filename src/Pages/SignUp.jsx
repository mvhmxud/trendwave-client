import React from 'react'
import Navigation from '../components/common/navigation'
import Footer from '../components/common/footer'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'
import Ellipse1 from '../assets/imgs/Ellipse 1.png'
import Ellipse2 from '../assets/imgs/Ellipse 2.png'
import Polygon1 from '../assets/imgs/Polygon 1.png'
import Rectangle1 from '../assets/imgs/Rectangle 1.png'
import Frame from '../assets/imgs/Frame 14.png'

const SignUp = () => {
  return (
    <div className='w-[100vw] h-screen relative flex flex-col items-center bg-white dark:bg-zinc-950 transition-colors ease-in-out duration-500 dark:text-white justify-center'>
      <div className='lg:w-[100%] w-[100%] h-[100%]  flex'>
        <div className='lg:w-[40%] slide-in-inv w-[100%] flex flex-col items-center justify-center'>
          <div className='lg:w-[65%] flex flex-col gap-7 p-5'>
            <div className='flex flex-col gap-2'>
            <h1 className='text-2xl'>Log in</h1>
            <p className='text-xs text-zinc-500'>Thanks to come back on TrendWave</p>
            </div>
            <div className='flex flex-col '>
               <div className='border-[2px] dark:border-zinc-600 relative mt-5 rounded-lg h-9'>
                    <label className='absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs'>Email</label>
                    <input placeholder='CurvaSudLaPrima@TW.com' type='text' className='border-none text-sm p-2 pt-3 h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in focus:outline-black dark:focus:outline-zinc-600 '/>
               </div>
               <div className='border-[2px] dark:border-zinc-600 relative mt-5 rounded-lg h-9'>
                    <label className='absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs'>Full Name</label>
                    <input placeholder='ex: Mahmoud Abdelraziq' type='text' className='border-none text-sm p-2 pt-3 h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in focus:outline-black dark:focus:outline-zinc-600 '/>
               </div>
               <div className='border-[2px] dark:border-zinc-600 relative mt-5 rounded-lg h-9'>
                    <label className='absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs'>Address</label>
                    <input placeholder='21 Savage .st , Mars' type='text' className='border-none text-sm p-2 pt-3 h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in focus:outline-black dark:focus:outline-zinc-600 '/>
               </div>
               <div className='border-[2px]  dark:border-zinc-600 relative mt-5 rounded-lg h-9'>
                    <label className='absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs'>Password</label>
                    <input type='password' placeholder='••••••••••••' name='password' className='border-none text-sm p-2 pt-3 h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in focus:outline-black dark:focus:outline-zinc-600 '/>
               </div>
               <div className='border-[2px]  dark:border-zinc-600 relative mt-5 rounded-lg h-9'>
                    <label className='absolute top-[-8px] left-[20px] bg-white dark:bg-zinc-950 px-2 text-xs'>Re-Enter Password</label>
                    <input type='password' placeholder='••••••••••••' name='password' className='border-none text-sm p-2 pt-3 h-[100%] dark:bg-zinc-950 w-full rounded-lg focus:outline-1 transition-all ease-in focus:outline-black dark:focus:outline-zinc-600 '/>
               </div>
              <div className=' w-full mt-5' >
                <div className='flex text-xs gap-2'>
                <input type="checkbox" name="" id="" /> 
                <span>agree with the terms</span>
                </div>
                <p className='text-xs text-zinc-600 mt-2' >By clicking the checkbox, you agree to the terms & conditions and privacy policy, both of which are listed
                  <a href='https://www.youtube.com/shorts/Bb93rWg1XS4' target='_blank' className='text-cyan-400' > here</a> .
                </p>
              </div>
              
            </div>
              <Button text={'Register'}/>
              <Link className='text-xs text-center' to={'/'}>Back to Home</Link>
          </div>
        </div>
        <div className='lg:w-[60%] overflow-hidden relative justify-center items-center hidden lg:flex bg-[#F6F8FA] dark:bg-zinc-900'>
          <h1 className='w-[50%] text-3xl z-40 font-semibold'>
          Get started with TrendWave now and enjoy the real e-commerce experience
          </h1>
          <img className='absolute slide-in-inv delay-100 top-0 left-0 w-[15%]' src={Ellipse1}/>
          <img className='absolute popup delay-100 bottom-7 left-20 w-[20%] ' src={Ellipse2}/>
          <img className='absolute popup delay-100 bottom-0 right-0 w-[40%]' src={Rectangle1}/>
          <img className='absolute popup dark:hidden delay-100 w-[20%] bottom-[50%] right-[50%] ' src={Frame}/>
          <img className='absolute slide-in delay-100 right-0 top-4 ' src={Polygon1}/>
        </div>
      </div>
    </div>
    )
}

export default SignUp