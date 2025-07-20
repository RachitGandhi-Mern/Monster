// import React from 'react'
// import {  NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div className="w-full px-8 py-6 flex justify-center items-center">
//       {/* Main container */}
//       <div className="flex items-center justify-between gap-10 px-8 py-3 rounded-full border border-neutral-700 bg-black/50 backdrop-blur-lg text-white shadow-md transition-all duration-300 hover:shadow-lg">
        
//         {/* Left Icon (Menu) */}
//         <button className="p-2 rounded-full hover:bg-white/10 transition duration-300">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24" height="24" viewBox="0 0 24 24"
//             fill="none" stroke="currentColor" strokeWidth="2"
//             strokeLinecap="round" strokeLinejoin="round"
//             className="lucide lucide-menu"
//           >
//             <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
//           </svg>
//         </button>

//         {/* Center Nav Items */}
//         <div className="flex items-center gap-8 text-lg font-medium">
//           <NavLink to="/" className="hover:text-lime-400 transition duration-200">Home</NavLink>
//           <NavLink to="/about" className="hover:text-lime-400 transition duration-200">About</NavLink>
//           <NavLink to="/" className="hover:text-lime-400 transition duration-200">Contact</NavLink>

//           {/* Login Button with Outline Effect */}
//           <button className="px-5 py-1.5 rounded-full border border-white/40 hover:border-lime-400 focus:outline-none transition-all duration-300 text-white hover:text-lime-400 focus:ring-1 focus:ring-lime-400">
//             Login
//           </button>
//         </div>

//         {/* Right Icons */}
//         <div className="flex gap-4">
//           <button className="p-2 rounded-full hover:bg-white/10 transition duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" strokeWidth="2"
//               strokeLinecap="round" strokeLinejoin="round"
//               className="lucide lucide-shopping-bag"
//             >
//               <path d="M16 10a4 4 0 0 1-8 0" />
//               <path d="M3.103 6.034h17.794" />
//               <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
//             </svg>
//           </button>

//           <button className="p-2 rounded-full hover:bg-white/10 transition duration-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24" height="24" viewBox="0 0 24 24"
//               fill="none" stroke="currentColor" strokeWidth="2"
//               strokeLinecap="round" strokeLinejoin="round"
//               className="lucide lucide-user"
//             >
//               <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//               <circle cx="12" cy="7" r="4" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ width: '160px', height: '40px' }}
      animate={isHovered ? { width: '50%', height: '40px' } : { width: '160px', height: '40px' }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden z-50 shadow-xl px-6 py-3 flex items-center justify-center gap-6 text-white"
    >
      <h1 className="text-xl font-bold tracking-widest font-[monster-energy] text-[#95D600]">MONSTER</h1>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex gap-6 text-lg font-medium font-[monster-energy] uppercase "
        >
          <NavLink to="/" className="hover:text-white text-black transition duration-200   border-transparent hover:border-white">Home</NavLink>
          <NavLink to="/about" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">About</NavLink>
          <NavLink to="/login" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">Login</NavLink>
          <NavLink to="/signup" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">Signup</NavLink>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;