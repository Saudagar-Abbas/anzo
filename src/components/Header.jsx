import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full  flex items-center justify-end z-10 py-12 px-8 '>
      <button className='bg-black border-4 text-white text-xl px-6 py-1.5 hover:bg-gray-500 rounded-full ' >Hire me</button>
      <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  )
}

export default Header
