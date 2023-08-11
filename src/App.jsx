import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import SwitchTheme from './components/common/switchTheme'
import Index from './Pages'
import {Routes , Route} from 'react-router-dom'
import Products from './Pages/Products'
import Product from './Pages/Product'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import NotFound from './Pages/NotFound'
import Cart from './Pages/Cart'
import Success from './Pages/Success';
import { useSelector , useDispatch } from 'react-redux';
function App() {
  const {dark} = useSelector(state=>state.theme)

  return (
    <div className={`${dark ? 'dark' : ''} overflow-x-hidden `}>
        <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Index />}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart  />}/>
            <Route path='/signin' element={<SignIn  />}/>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/checkout/success' element={<Success/>}/>
          </Routes>
          <SwitchTheme isDark={dark}/>    
    </div>
  )
}

export default App
