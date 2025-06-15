/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 md:min-h-[280px] h-[200px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'/>

        <h3
          className='text-[25px] font-extrabold font-JB text-center md:text-wrap text-nowrap md:mt-0 mt-3 
                    bg-gradient-to-r from-white via-gray-400 to-gray-200 
                    bg-[length:300%_300%] bg-clip-text text-transparent 
                    animate-gradient-x'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 font-JB text-gray-200 md:text-[15px] max-w-3xl text-[13px] md:leading-[30px] leading-[23px] text-justify'>
  I am a Code-saver 
  <span className="mt-4 font-JB text-emerald-200 md:text-[15px] max-w-3xl font-semibold text-[13px] md:leading-[30px] leading-[23px] text-justify"> Software </span> 
  and <span className="mt-4 font-JB text-yellow-200 md:text-[15px] font-semibold max-w-3xl text-[13px] md:leading-[30px] leading-[23px] text-justify">Java </span> 
  developer with experience in TypeScript and JavaScript alongwith modern technologies like 
  Tailwind Css , ShadCn UI and Docker. I have expertise in frameworks like React Js , Node.js and
  Next Js. I leverage AWS Services to
  create efficient and reliable solutions. MongoDB and PostgreSQL for database management
  , Clerk and Zustand for effective authentication and state management. I don't just write code — 
  I architect digital spells in Java. Your ideas and 
  my code — a perfect fusion for impactful creations !
</motion.p>

        <div className='w-full h-auto mt-8 flex'>
<a href="/resume.pdf" download>
  <button className='-mt-1 flex mobile-button md:bg-[rgb(169,59,17)] md:rounded-md md:py-2 md:px-3 md:border-none cursor-pointer'>
    <span className='md:font-consolas font-JB text-white font-semibold cursor-pointer'>Resume</span>
    <div className='hidden md:block w-auto h-auto download-logo'></div>
  </button>
</a>



<div className='flex md:mt-1 mt-1 justify-between md:px-2 h-[30px]'>
  <a href="https://github.com/Anurag-singh-RBU/">
    <div className='md:ml-3 ml-5 github-logo cursor-pointer'></div>
  </a>
  <a href="https://x.com/anuragRBU" target="_blank" rel="noopener noreferrer">
    <div className='md:ml-0 -ml-1 twitter-logo cursor-pointer'></div>
  </a>
  <a href="https://www.linkedin.com/in/anuragsinghrbu/" target="_blank" rel="noopener noreferrer">
    <div className='md:ml-2 ml-1 md:-mt-2 -mt-2 linkedin-logo cursor-pointer'></div>
  </a>
</div>

        </div>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");