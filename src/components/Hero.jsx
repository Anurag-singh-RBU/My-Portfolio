/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from "framer-motion";
import heroVideo from "./hero-video.mp4";

import { styles } from "../styles";

const Hero = () => {
  return (
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white font-JB`}>
            I'm <span className='text-[#915EFF] gradient-text font-JB font-extrabold'>Anurag</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 ml-1 font-JB md:font-consolas font-JB font-bold md:text-[10px] mb-2 text-white-100`}>
            Building <span
            className="
            text-transparent
            bg-clip-text
            bg-[length:300%_300%]
            bg-[linear-gradient(270deg,#fbcfe8,#f9a8d4,#f472b6,#fbcfe8)]
            animate-[gradient-x_10s_ease_infinite]
            font-JB">ShadYx</span> UI and other <span className={`${styles.heroSubText} text-emerald-200 font-JB`}>SaaS</span> stuff <br className='sm:block hidden mb-2'/>
            <span 
              className='mt-4 text-white-100 lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] md:font-consolas font-JB font-bold md:text-[10px]'>
              where design meets code with style
            </span>
          </p>
        </div>

      </div>

  )
}

export default Hero