// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="w-full  bg-black text-white font-[helvatica] p-10 uppercase">
//       <div className="flex flex-col lg:flex-row justify-between gap-10">

//         {/* Links Section */}
//         <div className="flex gap-14 flex-wrap">
//           {/* Help */}
//           <div className="flex flex-col">
//             <h2 className="pb-4 font-semibold text-lg">Help</h2>
//             <ul className="space-y-2 text-sm">
//               <li>FAQs</li>
//               <li>Returns</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>

//           {/* Explore */}
//           <div className="flex flex-col">
//             <h2 className="pb-4 font-semibold text-lg">Explore</h2>
//             <ul className="space-y-2 text-sm">
//               <li>Beer</li>
//               <li>Collections</li>
//               <li>Gift Cards</li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div className="flex flex-col">
//             <h2 className="pb-4 font-semibold text-lg">Socials</h2>
//             <ul className="space-y-2 text-sm">
//               <li>Instagram</li>
//               <li>Facebook</li>
//               <li>Twitter</li>
//             </ul>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="flex flex-col gap-4 max-w-sm">
//           <h2 className="text-lg font-semibold">Get up to 25% off</h2>
//           <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
//           <div className="flex items-center border border-white rounded overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="bg-black text-white px-4 py-2 flex-1 placeholder:text-gray-400 focus:outline-none font-[]"
//             />
//             <button className="bg-white text-black px-4 py-2 uppercase text-sm hover:bg-gray-200 transition-all">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Disclaimer or Copyright */}
//       <div className="pt-30 text-center text-xs text-gray-400">
//         <h1 className=' stroke-text text-[16rem] font-[monster-energy]'>Monster</h1>

//         <div className='flex justify-between'>
//           <div>© {new Date().getFullYear()} <span className='text-[#95D600]'>Created By Rachit Gandhi</span></div>
//           <div>25% off</div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 60;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.life = Math.random() * 100;
        this.maxLife = 100;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = this.maxLife;
        }

        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          this.vx += dx * 0.00005;
          this.vy += dy * 0.00005;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = (this.life / this.maxLife) * 0.15;
        ctx.fillStyle = "#ffffff";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.save();
            ctx.globalAlpha = ((120 - distance) / 120) * 0.08;
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mousePos]);

  return (
    <>
      <style jsx>{`
        // @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .footer-container {
          font-family: "Inter", sans-serif;
          background: radial-gradient(
              circle at 20% 80%,
              rgba(255, 255, 255, 0.02) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(255, 255, 255, 0.02) 0%,
              transparent 50%
            ),
            linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .luxury-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.01) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.01) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          animation: grid-drift 30s linear infinite;
          opacity: 0.5;
        }

        @keyframes grid-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        .ambient-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 400px;
          background: radial-gradient(
            ellipse,
            rgba(255, 255, 255, 0.03) 0%,
            transparent 70%
          );
          animation: ambient-pulse 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ambient-pulse {
          0%,
          100% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1.1);
          }
        }

        .luxury-text {
          color: #fff8f0;
          font-weight: 800;
          letter-spacing: 0.08em;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-link {
          position: relative;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 0.75rem 0;
          font-weight: 300;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.8);
        }

        .premium-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #ffffff, transparent);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-link:hover {
          color: #ffffff;
          transform: translateX(8px);
        }

        .premium-link:hover::after {
          width: 30px;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .glass-morphism::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          animation: glass-shine 4s ease-in-out infinite;
        }

        @keyframes glass-shine {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        .luxury-input {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: #ffffff;
          font-weight: 300;
        }

        .luxury-input:focus {
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
          outline: none;
        }

        .luxury-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
          font-weight: 300;
        }

        .premium-button {
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
          color: #000000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          font-weight: 400;
          letter-spacing: 0.05em;
        }

        .premium-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.6s ease;
        }

        .premium-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
        }

        .premium-button:hover::before {
          left: 100%;
        }

        .monster-luxury {
          font-size: clamp(9rem, 15vw, 18rem);
          font-weight: 100;
          line-height: 0.75;
          color: #fffff;
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
          position: relative;
          letter-spacing: 0.02em;
          animation: monster-breathe 10s ease-in-out infinite;
        }

        .monster-luxury::before {
          content: "MONSTER";
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.8) 100%
          );
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: luxury-shimmer 8s ease-in-out infinite;
        }

        @keyframes monster-breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.02);
            opacity: 1;
          }
        }

        @keyframes luxury-shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .fade-in-luxury {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInLuxury 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInLuxury {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.6s;
        }
        .stagger-6 {
          animation-delay: 0.8s;
        }

        .luxury-accent {
          background: linear-gradient(135deg, #95d600 0%, #7ab800 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 400;
        }

        .subtle-border {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
        }

        .subtle-border::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }

        .luxury-badge {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }

        .luxury-badge::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(255, 255, 255, 0.03) 50%,
            transparent 100%
          );
          animation: badge-glow 3s ease-in-out infinite;
        }

        @keyframes badge-glow {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <footer
        ref={footerRef}
        className="footer-container relative w-full h-screen  text-white overflow-hidden "
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        <div className="luxury-grid" />
        <div className="ambient-glow" />

        <div className="relative z-10 px-6 pt-20 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex  xl:flex-row justify-between items-start gap-24 mb-40">
              <div className="flex gap-15 flex-wrap font-[JoganSoft]">
                <div
                  className={`flex flex-col space-y-6 ${
                    isVisible ? "fade-in-luxury stagger-1" : ""
                  }`}
                >
                  <h2 className="luxury-text  text-2xl mb-2 tracking-wider text-[#95D600]">
                    HELP
                  </h2>
                  <ul className="">
                    <li className="premium-link text-lg">FAQs</li>
                    <li className="premium-link text-lg">Returns</li>
                    <li className="premium-link text-lg">Contact Us</li>
                  </ul>
                </div>

                <div
                  className={`flex flex-col space-y-6 ${
                    isVisible ? "fade-in-luxury stagger-2" : ""
                  }`}
                >
                  <h2 className="luxury-text text-2xl mb-2 tracking-wider">
                    EXPLORE
                  </h2>
                  <ul className="">
                    <li className="premium-link text-lg">Beer</li>
                    <li className="premium-link text-lg">Collections</li>
                    <li className="premium-link text-lg">Gift Cards</li>
                  </ul>
                </div>

                <div
                  className={`flex flex-col space-y-6 ${
                    isVisible ? "fade-in-luxury stagger-3" : ""
                  }`}
                >
                  <h2 className="luxury-text text-2xl mb-2 tracking-wider">
                    SOCIALS
                  </h2>
                  <ul className="">
                    <li className="premium-link text-lg">Instagram</li>
                    <li className="premium-link text-lg">Facebook</li>
                    <li className="premium-link text-lg">Twitter</li>
                  </ul>
                </div>
              </div>

              {/* <div className={`glass-morphism rounded-2xl p-10 max-w-md space-y-8 ${isVisible ? 'fade-in-luxury stagger-4' : ''}`}>
                <h2 className="luxury-text text-3xl font-extralight leading-tight">
                  Get up to 25% off
                </h2>
                <p className="text-gray-300 text-lg font-light">
                  Subscribe to our exclusive newsletter
                </p>
                <div className="space-y-5">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="luxury-input w-full px-6 py-4 rounded-xl text-lg"
                  />
                  <button className="premium-button w-full px-6 py-4 rounded-xl text-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div> */}

              {/* Newsletter Section */}
              <div className="flex flex-col gap-4 max-w-sm">
                <h2 className="text-lg font-semibold">Get up to 25% off</h2>
                <p className="text-sm text-gray-300">
                  Subscribe to our newsletter
                </p>
                <div className="flex items-center border border-white rounded overflow-hidden font-[JoganSoft]">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="bg-black text-[#95D600] px-4 py-2 flex-1 placeholder:text-gray-400 focus:outline-none font-[]"
                  />
                  <button
                    className="bg-[#FFF8F0] text-black px-4 py-2 uppercase text-sm 
             hover:bg-[#95D600] hover:text-white transition-all 
             active:scale-95 duration-150"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`text-center mb-12 ${
                isVisible ? "fade-in-luxury stagger-5" : ""
              }`}
            >
              <h1 className="monster-luxury tracking-wider">MONSTER</h1>
            </div>

            <div
              className={`subtle-border flex flex-col lg:flex-row justify-between items-center gap-8 pt-7 ${
                isVisible ? "fade-in-luxury stagger-6" : ""
              }`}
            >
              <div className="text-lg font-light">
                © {new Date().getFullYear()}
                <span className="luxury-accent text-md ml-2">
                  Created By Rachit Gandhi
                </span>
              </div>
      

              <div className="relative w-fit mt-[1.5vw] cursor-pointer group border-2 border-[#95D600] rounded-full overflow-hidden px-[1vw] py-[0.4vw] bg-transparent">
                <h6 className="relative z-[2] text-[1.1vw] font-semibold text-[#95D600] font-lightFont group-hover:text-black transition-all duration-300">
                  25% OFF
                </h6>
                <span className="absolute inset-0 top-full group-hover:top-0 transition-all  duration-500 bg-[#95D600] rounded-full group-hover:rounded-none z-[1]"></span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
