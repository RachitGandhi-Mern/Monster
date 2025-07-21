

//! Smooth Scrolling With Locomotive Scroll but it is Giving Issue with Scroll trigger Pages
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

// gsap.registerPlugin(ScrollTrigger);

// const SmoothScroll = ({ children }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//   const locoScroll = new LocomotiveScroll({
//     el: scrollRef.current,
//     smooth: true,
//     lerp: 0.1,
//   });

//   locoScroll.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(scrollRef.current, {
//     scrollTop(value) {
//       return arguments.length
        // ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: scrollRef.current.style.transform ? "transform" : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();

//   // 💡 Add this timeout — ensures layout is calculated correctly
//   setTimeout(() => {
//     locoScroll.update();
//   }, 1000); // Wait 1 second before forcing update

//   return () => {
//     locoScroll.destroy();
//     ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
//   };
// }, []);

//   return (
//     <div ref={scrollRef} className="Smooth-wrapper">
//       {children}
//     </div>
//   );
// };

// export default SmoothScroll;







//! Here I Used Lenis Which is Perfect
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      smoothWheel: true,
      smoothTouch: false, // Disable on touch devices
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP ScrollTrigger proxy for Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length 
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.animatedScroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    // Update ScrollTrigger when Lenis updates
    ScrollTrigger.addEventListener("refresh", () => lenis.resize());

    // Animation frame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.removeEventListener("refresh", () => lenis.resize());
    };
  }, []);

  return (
    <div ref={scrollRef} className="smooth-wrapper">
      {children}
    </div>
  );
};

export default SmoothScroll;



