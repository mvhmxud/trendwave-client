
const Navigation = () => {
  return (
    <div className="w-[66.66%] dark:text-white flex justify-between items-center mt-7 h-14 ">
        <div className="width-[20%] font-bold text-lg">TrendWave</div>
        <ul className="width-[80%] text-zinc-800 dark:text-white font-light flex gap-x-11 items-center">
           <li className="cursor-pointer">Home</li> 
           <li className="cursor-pointer">Deals</li> 
           <li className="cursor-pointer">New Arrivals</li> 
           <li className="cursor-pointer">Sign in</li>
           <li className="cursor-pointer"><button className="w-24 rounded-lg dark:drop-shadow-none drop-shadow-lg text-white dark:bg-zinc-800 bg-black p-2">Sign Up</button></li> 
        </ul>
    </div>
  )
}

export default Navigation