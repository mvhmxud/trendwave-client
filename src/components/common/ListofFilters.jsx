import React from 'react'

const ListofFilters = ({list , handler , selected}) => {
  
  return (
    <ul className='text-xs lg:text-sm  flex lg:justify-around justify-center flex-wrap gap-2 w-full'>
        {list.map(filter=> <li onClick={handler.bind(this , filter)} className={`p-1 lg:p-2 lg:px-4 rounded-lg cursor-pointer ${selected === filter ? 'bg-black shadow-xl text-white' : 'text-zinc-600 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 transition-all ease-linear duration-300'} `} >{filter}</li> )}
    </ul>
  )
}

export default ListofFilters