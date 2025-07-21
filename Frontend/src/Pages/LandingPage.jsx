import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import hc1Cursor from '../assets/Images/HC1.png'; 
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInside, setIsInside] = useState(true);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const video = videoRef.current;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.muted = true;
        setIsMuted(true);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const followCursor = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (cursorRef.current && isInside) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y +40}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(followCursor);
    };

    followCursor();
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isInside]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      const newMuteState = !video.muted;
      video.muted = newMuteState;
      setIsMuted(newMuteState);
      video.volume = 0.15;
    }
  };

  const handleMouseEnter = () => {
    setIsInside(true);
    document.body.style.cursor = 'none'; 
  };

  const handleMouseLeave = () => {
    setIsInside(false);
    document.body.style.cursor = `url(${hc1Cursor}) 32 32, auto`; 
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={handleVideoClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/landing-bg.mp4" type="video/mp4" />
      </video>

      {/* Custom Cursor Follower */}
      {isInside && (
        <div
          ref={cursorRef}
          className="fixed z-[9999] pointer-events-none text-[#95D600] text-xs bg-black/60 px-3 py-1 rounded-full select-none font-[JoganSoft]"
        >
          {isMuted ? 'Tap to Unleash' : 'Tap to Silence'}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
         <div className="relative z-10 w-full h-full text-white px-6 md:px-12 pt-6">
  
        <Navbar />

        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] uppercase text-center font-[JoganSoft]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Crack the Chaos <br className="hidden md:block" />
            Monster Energy Awaits
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-200 max-w-xl">
            Fuel Your Fire | Bold Flavor, Raw Energy, No Limits
          </p>

          {/* CTA Buttons */}
<div className="mt-6 flex flex-wrap gap-4 justify-center font-[monster-energy]">
  {/* Order Now Button */}
  <div className="relative w-fit cursor-pointer group border-2 border-white rounded-full overflow-hidden px-[5vw] py-[2.5vw] md:px-[2vw] md:py-[0.6vw] bg-white/10 backdrop-blur-md">
    <h6 className="relative z-[2] text-[4vw] md:text-[1vw] font-semibold text-white font-lightFont group-hover:text-black transition-all duration-300 whitespace-nowrap">
      Order Now
    </h6>
    <span className="absolute inset-0 top-full group-hover:top-0 transition-all duration-500 bg-white rounded-full group-hover:rounded-none z-[1]"></span>
  </div>

  {/* Learn More Button */}
  <NavLink to='/about' className="relative w-fit cursor-pointer group border-2 border-white rounded-full overflow-hidden px-[5vw] py-[2.5vw] md:px-[2vw] md:py-[0.6vw] bg-white/10 backdrop-blur-md">
    <h6 className="relative z-[2] text-[4vw] md:text-[1vw] font-semibold text-white font-lightFont group-hover:text-black transition-all duration-300 whitespace-nowrap">
      Learn more →
    </h6>
    <span className="absolute inset-0 top-full group-hover:top-0 transition-all duration-500 bg-white rounded-full group-hover:rounded-none z-[1]"></span>
  </NavLink>
</div>

    
          {/* Emoji Section */}
          <div className="mt-8 flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
            <span className="text-sm md:text-base">Our All Nitro Products for 100% Healthy</span>
          </div>
        </div>

      </div>
        
             
        <Navbar />
      </div>
    </div>
  );
};

export default LandingPage;

