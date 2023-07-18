import { useState } from 'react'
import './App.css'
import Navigation from './components/common/navigation'
import SwitchTheme from './components/common/switchTheme'

function App() {
const [isDark , setIsDark] = useState(true)
const changeThemeHandler=()=>{
  console.log('first')
  setIsDark(prev=>
    !prev
  )
}
  return (
    <div className={`${isDark ? 'dark' : ''} `}>
      <div className='w-[100vw] relative h-[100vh] flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500'>
          <Navigation/>  
      </div>
          <SwitchTheme isDark={isDark} handler={changeThemeHandler}/>    
    </div>
  )
}

export default App
