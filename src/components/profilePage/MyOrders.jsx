import React, { useEffect } from 'react'
import OrderTab from './OrderTab'
import { useSelector , useDispatch } from 'react-redux'
import { getUserOrders } from '../../store/features/AuthSlice'
import { ThreeDots } from 'react-loader-spinner'
const MyOrders = () => {
  const dispatch = useDispatch()
  const {loading , userOrders} = useSelector(state=>state.auth)
  useEffect(()=>{
    dispatch(getUserOrders())
  },[])
  return (
    <div className=' w-full'>
      <h1>My Orders</h1>
        <div className='h-[45vh] overflow-y-auto overflow-x-auto scroll flex flex-col'>
          {!loading && userOrders.length >= 1 && userOrders.map(order=><OrderTab key={order._id} order={order}/>)}
          {loading && <ThreeDots color="grey" wrapperClass="w-[20%] mx-auto"/>}
          {!loading && userOrders.length < 1 && <h1 className='self-center mt-10 text-xl'>No orders yet.</h1>}
        </div>
    </div>
  )
}

export default MyOrders