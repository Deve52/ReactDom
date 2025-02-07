import React from 'react';

const Slider = () => {
  return (
    <div className="slider-container h-[6vh] w-full  flex items-center justify-between  overflow-hidden">
      <div className="slider-track flex gap-28 w-max animate-slide">
        <img src="/images/s1.svg" alt="s1" className="h-full mx-4" />
        <img src="/images/s2.svg" alt="s2" className="h-full mx-4" />
        <img src="/images/s3.svg" alt="s3" className="h-full mx-4" />
        <img src="/images/s4.svg" alt="s4" className="h-full mx-4" />
        <img src="/images/s5.svg" alt="s5" className="h-full mx-4" />
        <img src="/images/s6.svg" alt="s6" className="h-full mx-4" />
        {/* Duplicated images for seamless loop */}
        <img src="/images/s1.svg" alt="s1" className="h-full mx-4" />
        <img src="/images/s2.svg" alt="s2" className="h-full mx-4" />
        <img src="/images/s3.svg" alt="s3" className="h-full mx-4" />
        <img src="/images/s4.svg" alt="s4" className="h-full mx-4" />
        <img src="/images/s5.svg" alt="s5" className="h-full mx-4" />
        <img src="/images/s6.svg" alt="s6" className="h-full mx-4" />
        {/* Duplicated images for seamless loop */}
        <img src="/images/s1.svg" alt="s1" className="h-full mx-4" />
        <img src="/images/s2.svg" alt="s2" className="h-full mx-4" />
        <img src="/images/s3.svg" alt="s3" className="h-full mx-4" />
        <img src="/images/s4.svg" alt="s4" className="h-full mx-4" />
        <img src="/images/s5.svg" alt="s5" className="h-full mx-4" />
        <img src="/images/s6.svg" alt="s6" className="h-full mx-4" />
        {/* Duplicated images for seamless loop */}
        <img src="/images/s1.svg" alt="s1" className="h-full mx-4" />
        <img src="/images/s2.svg" alt="s2" className="h-full mx-4" />
        <img src="/images/s3.svg" alt="s3" className="h-full mx-4" />
        <img src="/images/s4.svg" alt="s4" className="h-full mx-4" />
        <img src="/images/s5.svg" alt="s5" className="h-full mx-4" />
        <img src="/images/s6.svg" alt="s6" className="h-full mx-4" />
      </div>
    </div>
  );
};

export default Slider;