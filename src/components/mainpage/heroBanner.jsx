import img1 from '../../assets/imgs/image 2 28.png'
import img2 from '../../assets/imgs/5.png'
import img3 from '../../assets/imgs/2.png'
import img4 from '../../assets/imgs/3.png'
import Button from '../common/Button'
const HeroBanner = () => {
  return (
    <div className=" w-[80%] my-10 lg:w-[66.66%] grid grid-cols-1 lg:grid-row-6 lg:gap-x-7 gap-y-2  lg:grid-cols-3 lg:grid-rows-5 md:min-h-[70vh]">
        <div className="bg-[#E0E0E0] lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-6 dark:bg-zinc-800 rounded-lg grid items-end place-items-center">
            <img className='w-[80%]' alt='male model with chelsea boot' src={img1}/>
        </div>
        <div className="bg-[#E0E0E0] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 flex items-end justify-center dark:bg-zinc-800 rounded-lg lg:overflow-hidden">
        <img  className="w-[80%]" alt='four female models ' src={img3}/>
        </div>
        <div className="lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-4 flex flex-col justify-center text-center ">
            <p className=' dark:text-white uppercase text-3xl lg:text-5xl font-semibold'>
                ultimate
            </p>
            <p className='text-6xl text-transparent font-outline-2 dark:dark-font-outline-2 lg:text-8xl font-semibold uppercase '>sale</p>
        </div>
        
        <div className="lg:w-[70%] lg:mx-auto lg:col-start-2 lg:col-end-3 lg:row-start-4 lg:row-end-5 gap-2 uppercase flex flex-col items-center">
            <span className='dark:text-white w- '>new collection</span>
            <Button  text={'SHOP NOW'} w={null}   />
        </div>
        <div className="lg:col-start-2 flex items-end justify-center overflow-hidden lg:col-end-3 lg:row-start-5 lg:row-end-6  rounded-lg  bg-[#f49f93]">
            <img className='w-[90%]' src={img4} alt=''/>
        </div>
        <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-6 bg-[#E0E0E0] dark:bg-zinc-800 rounded-lg grid items-end place-items-center ">
        <img className='w-[50%]' alt='male model sitting on a chair' src={img2}/>
        </div>
    </div>
  )
}

export default HeroBanner