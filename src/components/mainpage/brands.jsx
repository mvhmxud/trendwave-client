import React from 'react'
import lv from "../../assets/imgs/louis vuitton.png"
import chnl from '../../assets/imgs/Chanel.png'
import dnm from '../../assets/imgs/denim.png'
import prada from '../../assets/imgs/prada.png'
import ck from '../../assets/imgs/calvin klein.png'
const Brands = () => {
  return (
    <div className='flex w-[66.66%] lg:justify-between gap-9 items-center justify-center lg:flex-row  flex-wrap my-8 lg:mt-10 lg:mb-10 overflow-hidden'>
        <img className='w-[30%] lg:w-[15%]' src={chnl} alt="" />
        <img className='w-[30%] lg:w-[15%]' src={lv} alt="" />
        <img className='w-[30%] lg:w-[15%]' src={prada} alt="" />
        <img className='w-[30%] lg:w-[15%]' src={ck} alt="" />
        <img className='w-[30%] lg:w-[15%]' src={dnm} alt="" />
    </div>
  )
}

export default Brands