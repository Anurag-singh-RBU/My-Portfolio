import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-primary z-50 px-4">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4"></div>
      <p className="text-white font-JB font-semibold text-base sm:text-lg md:text-xl text-center">
        Rendering at the speed of chai ☕
      </p>
    </div>
  );
};

export default Preloader;
