import React from 'react'
import {MdDarkMode , MdLightMode} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/features/themeSlice';
const SwitchTheme = ({isDark,handler}) => {
  const dispatch = useDispatch()
  return (
    <div onClick={()=>{dispatch(toggleTheme())}} className='w-10  h-10 cursor-pointer grid place-items-center text-2xl text-white fixed top-[90%] right-[3%] dark:bg-zinc-800 bg-black rounded-lg ' >
        {isDark ? <MdDarkMode className='popup'/> : <MdLightMode className='popup'/>}
    </div>
  )
}

export default SwitchTheme