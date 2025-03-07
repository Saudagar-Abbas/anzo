import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {
  const mouseMoving = (e) =>{
    console.log(e.clientX,e.clientY);
    
  }
  return (
    <div onMouseMove={(e)=>{
      mouseMoving(e)
      }} className='h-screen px-4 py-4 bg-white'>
      <div className='h-full w-full p-8  shadow-xl shadow-gray-700 bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_606,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]'>
        <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"className='h-20   ml-5 ' alt="" />
        <TiltText />
        <Page1Bottom />
      </div>
      
    </div>
  )
}

export default Page1
