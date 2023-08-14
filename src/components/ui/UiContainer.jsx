import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useSelector  } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import SwitchTheme from './switchTheme';

const UiContainer = ({children}) => {
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
            {children}
            <SwitchTheme isDark={dark}/> 
    </div>

  )
}

export default UiContainer