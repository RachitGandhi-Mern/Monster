// SmoothScroll.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
  const locoScroll = new LocomotiveScroll({
    el: scrollRef.current,
    smooth: true,
    lerp: 0.1,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollRef.current, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollRef.current.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // 💡 Add this timeout — ensures layout is calculated correctly
  setTimeout(() => {
    locoScroll.update();
  }, 1000); // Wait 1 second before forcing update

  return () => {
    locoScroll.destroy();
    ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
  };
}, []);

  return (
    <div ref={scrollRef} className="Smooth-wrapper">
      {children}
    </div>
  );
};

export default SmoothScroll;