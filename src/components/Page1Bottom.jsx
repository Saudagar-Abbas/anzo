import React from 'react'
import { motion } from "framer-motion";

const Page1Bottom = () => {
  return (
    <div className="absolute left-0 p-15  flex items-center justify-between bottom-0 w-full">
      <div className="text-white text-xl ">
        <h2 >BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-gray-400'> BESPOKE FREELANCE</h3>
      </div>
      <div>
        <motion.img
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_63,h_63,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt=""
          animate={{
            rotate: 360,
            scale:1.5,
          }}
          transition={{
            duration: 2, // Time for one full rotation
            ease: "linear", // Ensures a smooth, constant speed
            repeat: Infinity, // Loops the animation forever
          }}
          />
      </div>
    </div>
  );
}

export default Page1Bottom
