import {BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs'
import { AiFillStar } from "react-icons/ai";
import test1 from '../../assets/imgs/test1.png';
import test2 from '../../assets/imgs/test2.png';
import test3 from '../../assets/imgs/test3.png';
// Import Swiper styles
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="w-full dark:bg-zinc-800 bg-[#FAFAFA] my-10 lg:m-16">
      <div className="flex flex-col items-center text-center my-5 ">
        <div className="w-[80%] lg:w-[66.66%]">
          <h1 className="lg:text-3xl text-2xl mb-2 font-bold text-zinc-800 dark:text-zinc-300">
            This Is What Our Customers Say
          </h1>
          <p className="text-center mx-auto p-2 text-xs text-zinc-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </div>
        <div className="relative w-[90%] lg:w-[70%]  flex justify-center text-white mt-12">
          <div className="w-[33.33%] gap-7 min-h-32 bg-white dark:bg-zinc-900 shadow-lg rounded-md flex flex-col lg:flex-row  items-center p-3">
            <div className="h-full grid place-content-center">
                <img className="w-[100%]" src={test2}  />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[60%] text-left text-zinc-700 dark:text-zinc-100">{`“Items That I ordered were the best investment I ever made. I can't say enough about your quality service."`}</p>
              <div className="flex text-xs text-yellow-400">
                {[1, 2, 3, 4, 5].map((item , index) => (
                  <AiFillStar key={index} />
                ))}
              </div>
              <hr className="w-[40%]" />
              <div>
                <h1 className="text-black text-left dark:text-zinc-100">Suzan B.</h1>
                <p className="text-[60%]  text-zinc-700 text-left dark:text-zinc-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="w-[33.33%] flex-col lg:flex-row gap-7 min-h-32 bg-white dark:bg-zinc-900 shadow-lg rounded-md scale-125 z-50 flex items-center p-3">
            <div className="h-full grid place-content-center">
                <img className="w-[100%]" src={test1}  />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[60%] text-left text-zinc-700 dark:text-zinc-100">{`"You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!"`}</p>
              <div className="flex text-xs text-yellow-400">
                {[1, 2, 3, 4, 5].map((item , index) => (
                  <AiFillStar key={index} />
                ))}
              </div>
              <hr className="w-[40%]" />
              <div>
                <h1 className="text-black text-left dark:text-zinc-100">James K.</h1>
                <p className="text-[60%]  text-zinc-700 text-left dark:text-zinc-500">Traveler</p>
              </div>
            </div>
          </div>
          <div className="w-[33.33%] flex-col lg:flex-row gap-7 min-h-32 bg-white dark:bg-zinc-900 shadow-lg rounded-md  flex items-center p-3">
            <div className="h-full grid place-content-center">
                <img className="w-[100%]" src={test3} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[60%] text-left text-zinc-700 dark:text-zinc-100">{`“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”`}</p>
              <div className="flex text-xs text-yellow-400">
                {[1, 2, 3, 4, 5].map((item , index) => (
                  <AiFillStar key={index} />
                ))}
              </div>
              <hr className="w-[40%]" />
              <div>
                <h1 className="text-black text-left dark:text-zinc-100">Megen W.</h1>
                <p className="text-[60%]  text-zinc-700 text-left dark:text-zinc-500">UI Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-[20%] lg:mt-12">
          <div className="rounded-full w-10 h-10 text-xl bg-white shadow-md grid place-content-center cursor-pointer dark:text-white dark:bg-zinc-900"><BsArrowLeftShort/></div>
          <div className="rounded-full w-10 h-10 text-xl bg-white shadow-md grid place-content-center cursor-pointer dark:text-white dark:bg-zinc-900"><BsArrowRightShort/></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
