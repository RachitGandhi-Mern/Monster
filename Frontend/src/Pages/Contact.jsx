//! In This There Is no Styling and Text In side bar 


// import React, { useEffect, useRef, useState } from 'react';
// import Navbar from '../Components/Navbar';

// const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const textRef = useRef(null);
//   const animationRef = useRef(null);
//   const currentX = useRef(-10);
//   const direction = useRef(1);
//   const speed = 0.5;

//   const toggleEmail = () => {
//     setIsVisible((prev) => !prev);
//   };

//   const animateText = () => {
//     currentX.current += direction.current * speed;
//     if (currentX.current > 625 || currentX.current < 0) {
//       direction.current = 1;
//       currentX.current = 0;
//     }
//     if (textRef.current) {
//       textRef.current.setAttribute('x', currentX.current);
//     }
//     animationRef.current = requestAnimationFrame(animateText);
//   };

//   useEffect(() => {
//     animateText();
//     return () => cancelAnimationFrame(animationRef.current);
//   }, []);

//   return (
//     <div className="relative flex flex-col h-screen bg-[#83af9b] overflow-hidden font-[Bebas Neue]">
//       <Navbar/>
//       <h1 className=' pl-30 p-20 text-7xl font-[JoganSoft]'>About US</h1>
//       <svg
//         viewBox="0 0 425 300"
//         className="absolute bottom-0 right-[-50px] h-[500px] rotate-[90deg] translate-x-[-170px]"
//       >
//         <path
//           id="curve"
//           d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
//           fill="transparent"
//         />
//         <text
//           ref={textRef}
//           className="fill-[#f9cdad] text-[10px] tracking-[3px]"
//         >
//           <textPath xlinkHref="#curve">send us a line ↝</textPath>
//         </text>
//       </svg>

//       {/* Footer */}
//       <div className="w-screen h-[50px] fixed bottom-0 z-[999999]">
//         <div
//           className="text-[52px] text-[#f9cdad] hover:text-[#fe4365] cursor-pointer float-right mr-[8%] mt-[2.5px] w-[25px] h-[25px]  text-center leading-[18px]"
//           onClick={toggleEmail}
//         >
//           @
//         </div>
//       </div>

//       {/* Email Modal */}
//       <div
//         className={`transition-all duration-[850ms] ease-out overflow-hidden min-h-[300px] w-[50vw] h-[50vh] bg-[#f9cdad] rounded-[10px] absolute top-[20%] left-[-200px] flex flex-col opacity-0 ${
//           isVisible ? 'translate-x-[20%] opacity-100' : '-translate-x-[200%]'
//         }`}
//       >
//         <div
//           className="absolute right-0 top-0 text-[#fe4365] m-[5px] p-[5px] hover:text-[33px] transition-all duration-1000 ease cursor-pointer"
//           onClick={toggleEmail}
//         >
//           x
//         </div>
//         <div className="bg-[#c8c8a9] relative w-[calc(100%-150px)] ml-[70px] mt-[15px] h-[25px] p-[10px] rounded-[5px] hover:bg-[#83af9b] cursor-pointer">
          
//         </div>
//         <div className="bg-[#c8c8a9] relative w-[calc(100%-150px)] ml-[70px] mt-[40px] h-[200px] p-[10px] rounded-[5px] hover:bg-[#83af9b] cursor-pointer">
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;














// ! Current Code With Side Bar Styles 

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import GooglyEyes from '../Components/GooglyEyes'; 
import { NavLink } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  const animationRef = useRef(null);
  const currentX = useRef(-10);
  const direction = useRef(1);
  const speed = 0.9;

  const toggleEmail = () => setIsVisible((prev) => !prev);

  const animateText = () => {
    currentX.current += direction.current * speed;
    if (currentX.current > 625 || currentX.current < 0) {
      direction.current = 1;
      currentX.current = 0;
    }
    if (textRef.current) {
      textRef.current.setAttribute('x', currentX.current);
    }
    animationRef.current = requestAnimationFrame(animateText);
  };

  useEffect(() => {
    animateText();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="relative flex flex-col h-screen bg-[#83af9b] overflow-hidden font-[Bebas Neue]">
      <Navbar />
      
      {/* 🟢 GooglyEyes in top-right corner */}
      <div className="absolute top-4 right-70 z-[9999] w-[20px] h-[20px]">
        <GooglyEyes />
      </div>

      <h1 className="pl-30 p-10 text-7xl font-[JoganSoft]">Contact Us</h1>

      <svg
        viewBox="0 0 425 300"
        className="absolute bottom-0 top-0 right-[-50px] h-[750px] rotate-[90deg] translate-x-[-170px]"
      >
        <path
          id="curve"
          d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145"
          fill="transparent"
        />
        <text ref={textRef} className="fill-[#f9cdad] text-[10px] tracking-[3px]">
          <textPath xlinkHref="#curve">send us a line ↝</textPath>
        </text>
      </svg>

      {/* Footer */}
      <div className="w-screen h-[50px] fixed bottom-0 z-[999999]">
        <div
          className="text-4xl text-[#fe4365] hover:text-[#f9cdad]  cursor-pointer float-right mr-[8%] mt-[2.5px] w-auto h-[25px] text-center leading-[18px] uppercase font-[JoganSoft]"
          onClick={toggleEmail}
        >
          @ Click Here
        </div>
      </div>

      {/* Email*/}
      <div
        className={`transition-all duration-[850ms] font-[JoganSoft] ease-out overflow-hidden min-h-[300px] w-[50vw] h-[50vh] bg-[#f9cdad] rounded-[10px] absolute top-[20%] left-[-200px] flex flex-col opacity-0 ${
          isVisible ? 'translate-x-[20%] opacity-100' : '-translate-x-[200%]'
        }`}
      >
        <div
          className="absolute right-0 top-0 text-[#fe4365] m-[5px] p-[5px] hover:text-[33px] transition-all duration-1000 ease cursor-pointer"
          onClick={toggleEmail}
        >
          x
        </div>
        <a href='https://www.monsterenergy.com' target='blank' className="bg-[#c8c8a9] flex items-center relative w-[calc(100%-150px)] ml-[80px] mt-[15px] h-[25px] p-[10px] rounded-[5px] hover:bg-[#83af9b] cursor-pointer">
          https://www.monsterenergy.com
        </a>
       <div className="bg-[#c8c8a9] relative w-[calc(100%-150px)] ml-[80px] mt-[40px] h-[250px] p-[24px] rounded-[16px] hover:bg-[#83af9b] transition-all duration-500 ease-in-out cursor-pointer shadow-lg flex flex-col justify-between group">
  <div>
    <h2 className="text-[24px] font-[JoganSoft] text-[#1e1e1e] mb-[10px] leading-tight group-hover:text-[#fe4365] transition-all duration-300">
      Welcome to the Monster Energy Zone
    </h2>
    <p className="text-[16px] text-[#333333] leading-[1.7] font-medium">
      Feel the rush. Embrace the chaos. Monster fuels your boldest moves with unstoppable energy.
    </p>
  </div>

  <div className="flex justify-end mt-[20px]">
    <a
      href="https://www.monsterenergy.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[15px] text-[#fe4365] font-semibold hover:underline hover:tracking-wide transition-all duration-300"
    >
      Explore the Experience →
    </a>
  </div>
  <div className='flex gap-2 '>
  <a href='https://www.facebook.com/MonsterEnergy/'  target='blank' className="flex items-center gap-1 hover:text-[#fe4365] ">
    <Linkedin size={16} />
    Facebook
  </a>
  <a href='https://www.instagram.com/monsterenergy/' target='blank' className="flex items-center gap-1 hover:text-[#fe4365]">
    <Instagram size={16} />
    Instagram
  </a>
  <a href='https://twitter.com/monsterenergy' target='blank'  className="flex items-center gap-1 hover:text-[#fe4365]">
    <Twitter size={16} />
    Twitter
  </a>
  <a href='https://www.youtube.com/monsterenergy' target='blank' className="flex items-center gap-1 hover:text-[#fe4365]">
    <Mail size={16} />
    Youtube
  </a>
</div>
</div>
      </div>
    </div>
  );
};

export default Contact;




