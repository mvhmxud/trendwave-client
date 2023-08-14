import React , {useState}from 'react'
import CartButton from '../components/cartPage/CartButton'
import Navigation from '../components/ui/navigation'
import Footer from '../components/ui/footer'
import AccountDetails from '../components/profilePage/AccountDetails'
import MyOrders from '../components/profilePage/MyOrders'

const Profile = () => {
   const [selected , setSelected ] = useState(1)
  return (
     <div className="w-[100vw] min-h-screen relative gap-5 flex flex-col items-center bg-white dark:bg-zinc-900 transition-colors ease-in-out duration-500 dark:text-white ">
        <Navigation/>
        <div className='w-[80%] flex flex-col gap-8 lg:w-[66.66%] bg-zinc-50 dark:bg-zinc-800 rounded-md p-10  min-h-[50vh]'>
         <div className='flex gap-2'>
            <h1 onClick={()=>setSelected(1)} className={`cursor-pointer text-zinc-500 ${selected === 1  ? 'font-medium text-zinc-950 dark:text-zinc-300 ease-in duration-100' : ''}`}>Account details</h1>/<h1 onClick={()=>setSelected(2)} className={`cursor-pointer text-zinc-500 ${selected === 2  ? 'font-medium text-zinc-950 dark:text-zinc-300 ease-in duration-100' : ''}`}>My orders</h1>
         </div>
         {selected === 1 && <AccountDetails/>}
         {selected === 2 && <MyOrders/>}
        </div>
        <CartButton/>
        <Footer/>
     </div>
  )
}

export default Profile