/* eslint-disable react-refresh/only-export-components */
import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 sm:gap-10'>
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          className={`
            w-24 h-24 sm:w-28 sm:h-28
            ${index < 7 ? "sm:block hidden" : "block"}
            sm:flex
            mobile:w-[30%] 
          `}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
