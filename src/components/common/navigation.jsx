import { useState } from "react"
import Button from "./Button"
import {BiMenuAltLeft} from 'react-icons/bi'
import { IoArrowBack} from 'react-icons/io5'
import {Link } from 'react-router-dom'
const Navigation = () => {
  const [isOpened , setIsOpened] = useState(false)
  const openSideMenuHandler = ()=>{
    setIsOpened(prev => !prev)
  }
  return (
    <div className="w-[80%] lg:w-[66.66%] dark:text-white flex justify-between items-center mt-7 h-14 ">
        <div className=" font-bold text-lg"><Link to={'/'}>TrendWave</Link></div>
        <div className="md:hidden text-3xl font-extrabold " onClick={openSideMenuHandler}>
          {!isOpened && <BiMenuAltLeft className="popup"/>}
        </div>
        <ul className=" text-zinc-800 hidden md:flex dark:text-white font-light lg:text-base text-sm  md:gap-5 lg:gap-x-11 items-center">
           <li className="cursor-pointer"> <Link to={'/'}>Home</Link> </li> 
           <li className="cursor-pointer"> <Link to={'/products'}>Deals</Link> </li> 
           <li className="cursor-pointer"> <Link to={'/products'}>New Arrivals</Link> </li> 
           <li className="cursor-pointer"> <Link to={'/signin'}>Sign in</Link> </li>
           <li className="cursor-pointer"> <Link to={'/register'}><Button text={'Sign Up'} w={24} /></Link> </li> 
        </ul>
        {isOpened ? <div className="fixed slide-in text-white flex flex-col gap-16 items-center p-4 top-0 right-0 w-[40vh] z-50 bg-black h-[100vh]">
          <h1 className="text-2xl font-semibold">TrendWave</h1>
          <ul className="flex flex-col items-center gap-5 w-full text-center ">
            <li className="cursor-pointer w-full p-2 hover:bg-zinc-800 active:bg-zinc-900"><Link onClick={()=>{setIsOpened(false)}} to={'/'}>Home</Link> </li>
            <li className="cursor-pointer w-full p-2 hover:bg-zinc-800 active:bg-zinc-900"><Link onClick={()=>{setIsOpened(false)}} to={'/products'}>Deals</Link> </li>
            <li className="cursor-pointer w-full p-2 hover:bg-zinc-800 active:bg-zinc-900"><Link onClick={()=>{setIsOpened(false)}} to={'/products'}>New Arrivals</Link> </li>
            <li className="cursor-pointer w-full p-2 hover:bg-zinc-800 active:bg-zinc-900"><Link onClick={()=>{setIsOpened(false)}} to={'/signin'}>Sign in</Link></li>
            <li> <Link to={'/signup'}><Button dark={true} text={'Sign Up'}/></Link></li>
            <IoArrowBack className="text-2xl" onClick={openSideMenuHandler}/>
          </ul>
        </div> : null}
    </div>
  )
}

export default Navigation