
//! Original Code But NOt Work with MObile

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <motion.div
//       initial={{ width: '160px', height: '40px' }}
//       animate={isHovered ? { width: '50%', height: '40px' } : { width: '160px', height: '40px' }}
//       transition={{ duration: 0.25, ease: 'easeInOut' }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="fixed top-5 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden z-50 shadow-xl px-6 py-6 flex items-center justify-center gap-6 text-white"
//     >
//       <h1 className="text-xl font-bold tracking-widest font-[monster-energy] text-[#95D600]">MONSTER</h1>
//       {isHovered && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.3 }}
//           className="flex gap-6 text-lg font-medium font-[monster-energy] uppercase "
//         >
//           <NavLink to="/" className="hover:text-white text-black transition duration-200   border-transparent hover:border-white">Home</NavLink>
//           <NavLink to="/about" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">About</NavLink>
//           <NavLink to="/login" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">Login</NavLink>
//           <NavLink to="/signup" className="hover:text-white text-black  transition duration-200  border-transparent hover:border-white">Signup</NavLink>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Navbar;









//!NavBar With Responsive and I added Click Feat.. On MObile 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Detect screen width: mobile if < 768px
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) setShowMenu((prev) => !prev);
  };

  const isExpanded = isMobile ? showMenu : isHovered;

  return (
    <motion.div
      initial={{ width: '160px', height: '40px' }}
      animate={isExpanded ? { width: '90%', height: '40px' } : { width: '160px', height: '40px' }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onHoverStart={!isMobile ? () => setIsHovered(true) : undefined}
      onHoverEnd={!isMobile ? () => setIsHovered(false) : undefined}
      onClick={handleClick}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden z-50 shadow-xl px-6 py-6 flex items-center justify-center gap-6 text-white cursor-pointer"
    >
      <h1 className="text-xl font-bold tracking-widest font-[monster-energy] text-[#95D600]">
        MONSTER
      </h1>

      {/* Navigation Links */}
      {isExpanded && (
        <motion.div
          key="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex gap-4 md:gap-6 text-md md:text-lg font-medium font-[JoganSoft] uppercase"
        >
          <NavLink to="/" className="hover:text-white text-black transition duration-200 hover:border-white">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-white text-black transition duration-200 hover:border-white">
            About
          </NavLink>
          <NavLink to="/Contact" className="hover:text-white text-black transition duration-200 hover:border-white">
            Contact
          </NavLink> 
          <NavLink to="/login" className="hover:text-white text-black transition duration-200 hover:border-white">
            Login
          </NavLink>
          <NavLink to="/signup" className="hover:text-white text-black transition duration-200 hover:border-white">
            Signup
          </NavLink>
          <NavLink to="/ProfileCard" className="hover:text-white text-black transition duration-200 hover:border-white">
            Me
          </NavLink>  
           
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
