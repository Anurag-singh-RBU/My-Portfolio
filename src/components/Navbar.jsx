/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (

    <nav className={`${styles.paddingX} w-full font-JB flex items-center py-5 fixed top-0 z-20 bg-gray-900`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            
          <img src={logo} alt='logo' className='w-8 h-7 object-contain' />
          <p className='text-white text-[18px] md:font-extrabold md:font-consolas font-JB font-bold cursor-pointer flex '>
            Anurag&nbsp;
            <span className='sm:block hidden md:font-extrabold md:font-consalas font-JB'>| Java Developer</span>
          </p>         
        </Link>

        <ul className='list-none hidden font-cursive sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white font-cursive" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`} className="font-JB font-bold text-white opacity-4 text-[15px] hover:text-gray-400">{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}/>

            <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 font-JB black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-JB font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="font-JB font-bold text-white-100 hover:text-gray-400">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
