import React from 'react'
import {MdDarkMode , MdLightMode} from 'react-icons/md'
const SwitchTheme = ({isDark,handler}) => {
  return (
    <div onClick={handler} className='w-10  h-10 cursor-pointer grid place-items-center text-2xl text-white fixed top-[90%] right-[3%] dark:bg-zinc-800 bg-black rounded-lg ' >
        {isDark ? <MdDarkMode className='popup'/> : <MdLightMode className='popup'/>}
    </div>
  )
}

export default SwitchTheme