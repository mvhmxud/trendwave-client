import { useState } from 'react'
import './App.css'
import SwitchTheme from './components/common/switchTheme'
import CartButton from './components/common/CartButton'
import Index from './Pages'

function App() {
const [isDark , setIsDark] = useState(false)
const changeThemeHandler=()=>{
  setIsDark(prev=>
    !prev
  )
}
  return (
    <div className={`${isDark ? 'dark' : ''} overflow-x-hidden `}>
          <Index/>
          <CartButton/>
          <SwitchTheme isDark={isDark} handler={changeThemeHandler}/>    
    </div>
  )
}

export default App
