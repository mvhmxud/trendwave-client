import React , {useEffect , useState} from 'react'
import { getCategories, setFilter} from '../../store/features/ProductsSlice'
import { useDispatch, useSelector } from 'react-redux'
const ListofFilters = () => {
  const {Filter} = useSelector(state=>state.products)
  const [selected , setSelected]= useState(null)
  const dispatch = useDispatch()
  const {categories , filterLoading} = useSelector(state=>state.products)
  const selectCatHandler = (id)=>{
    if(id){
      setSelected(id)
      dispatch(setFilter(id))
    }else{
      dispatch(setFilter(null))
    }
  }
  useEffect(()=>{
    dispatch(getCategories())
  },[])
  return (
    <ul className='text-xs lg:text-sm  flex lg:justify-around justify-center flex-wrap gap-2 w-full'>
        {!filterLoading && <li key={1} onClick={()=>{selectCatHandler(null)}} className={`p-1 lg:p-2 lg:px-4 rounded-lg cursor-pointer ${Filter === null ? 'bg-black shadow-xl text-white' : 'text-zinc-600 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 transition-all ease-linear duration-300'} `} >All</li>}
        {!filterLoading  &&  categories?.map((filter)=> <li key={filter._id} onClick={()=>{selectCatHandler(filter._id)}} className={`p-1 lg:p-2 lg:px-4 rounded-lg cursor-pointer ${Filter === filter._id ? 'bg-black shadow-xl text-white' : 'text-zinc-600 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 transition-all ease-linear duration-300'} `} >{filter.title}</li> )}
        {filterLoading && [1,2,3,4,5].map((filter , index)=> <li key={index} className={`p-1 lg:p-2 lg:px-4 rounded-lg w-[15%] h-8 bg-zinc-100 dark:bg-zinc-800 animate-pulse `} ></li>)}
    </ul>
  )
}

export default ListofFilters