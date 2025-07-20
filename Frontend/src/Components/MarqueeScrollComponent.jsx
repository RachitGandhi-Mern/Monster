// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// const MarqueeScrollComponent = () => {
//   const mainRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const locoScroll = new LocomotiveScroll({
//       el: mainRef.current,
//       smooth: true,
//       tablet: { smooth: true },
//       smartphone: { smooth: true },
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(mainRef.current, {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

//     return () => {
//       locoScroll.destroy();
//       ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
//     };
//   }, []);

//   useEffect(() => {
//     document.addEventListener("wheel", (dets) => {
//       const direction = dets.deltaY > 0;
//       gsap.to("#move .marque", {
//         x: direction ? "-200%" : "0%",
//         ease: "none",
//         repeat: -1,
//         duration: 5,
//       });
//       gsap.to("#move .marque img", {
//         rotate: direction ? 180 : 0,
//       });
//     });
//   }, []);

//   return (
//     <div id="main" ref={mainRef} className="relative">
//       <div id="page5" className="h-screen w-full bg-black">
//         <div
//           id="move"
//           className="bg-black py-[2vw] flex items-center justify-start flex-nowrap overflow-hidden"
//         >
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className="marque flex items-center justify-center shrink-0 gap-[3vw] px-[1.5vw]"
//               style={{ transform: "translateX(-100%)" }}
//             >
//               <h1 className="font-bold text-[#95D600] uppercase text-[2.6vw]  font-[monster-energy]">
//                 Monster Energy
//               </h1>
//               <img
//                 src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
//                 alt="arrow"
//                 className="h-[3.2vw]"
//               />
//               <h1 className="font-bold text-[#FFF8F0] uppercase text-[2.6vw] font-[monster-energy]">
//                 Monster Energy
//               </h1>
//               <img
//                 src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
//                 alt="arrow"
//                 className="h-[3.2vw]"
//               />
//               <h1 className="font-bold text-[#95D600] uppercase text-[2.6vw]   font-[monster-energy]">
//                 Monster Energy
//               </h1>
//               <img
//                 src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
//                 alt="arrow"
//                 className="h-[3.2vw]"
//               />
//               <h1 className="font-bold text-[#FFF8F0] uppercase text-[2.6vw] font-china font-[monster-energy]">
//                 Monster Energy
//               </h1>
//               <img
//                 src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
//                 alt="arrow"
//                 className="h-[3.2vw]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeScrollComponent;



import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const MarqueeScrollComponent = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const handleWheel = (dets) => {
      const direction = dets.deltaY > 0;
      gsap.to("#move .marque", {
        x: direction ? "-200%" : "0%",
        ease: "none",
        repeat: -1,
        duration: 5,
      });
      gsap.to("#move .marque img", {
        rotate: direction ? 180 : 0,
      });
    };

    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div id="main" className="relative">
      <div id="page5" className="h-auto w-full bg-black border-2">
        <div
          id="move"
          className="bg-[#95D600] py-[2vw] flex items-center justify-start flex-nowrap overflow-hidden"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="marque flex items-center justify-center shrink-0 gap-[3vw] px-[1.5vw]"
              style={{ transform: "translateX(-100%)" }}
            >
              <h1 className="font-bold text-black uppercase text-6xl font-[monster-energy]">
                Monster Energy
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="arrow"
                className="h-[3.2vw]"
              />
              <h1 className="font-bold text-[#FFF8F0] uppercase text-6xl font-[monster-energy]">
                Monster Energy
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="arrow"
                className="h-[3.2vw]"
              />
              <h1 className="font-bold text-black uppercase text-6xl font-[monster-energy]">
                Monster Energy
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="arrow"
                className="h-[3.2vw]"
              />
              <h1 className="font-bold text-[#FFF8F0] uppercase text-6xl font-[monster-energy]">
                Monster Energy
              </h1>
              <img
                src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                alt="arrow"
                className="h-[3.2vw]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeScrollComponent;
