import { useState } from 'react'
import './App.css'
import SwitchTheme from './components/common/switchTheme'
import CartButton from './components/common/CartButton'
import Index from './Pages'
import {Routes , Route} from 'react-router-dom'
import Products from './Pages/Products'
import Product from './Pages/Product'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
function App() {
const [isDark , setIsDark] = useState(false)
const changeThemeHandler=()=>{
  setIsDark(prev=>
    !prev
  )
}
  return (
    <div className={`${isDark ? 'dark' : ''} overflow-x-hidden `}>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products:id' element={<Product/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/register' element={<SignUp/>}/>
          </Routes>
          <SwitchTheme isDark={isDark} handler={changeThemeHandler}/>    
    </div>
  )
}

export default App
