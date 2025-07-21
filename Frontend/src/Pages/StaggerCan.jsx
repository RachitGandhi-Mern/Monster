

//! Perfect Code Which Is Responsive Also
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Can images
import Img1 from "../assets/Images/Stager1.png";
import Img2 from "../assets/Images/Stager2.png";
import Img3 from "../assets/Images/Stager3.png";
import Img4 from "../assets/Images/Stager4.png";
import Img5 from "../assets/Images/Stager5.png";

gsap.registerPlugin(ScrollTrigger);

const StaggerCan = () => {
  const sectionRef = useRef(null);
  const cansRef = useRef([]);

  useEffect(() => {
    // Animate cans on scroll
    gsap.set(cansRef.current, {
      y: "100%",
      opacity: 0,
      scale: 0.5,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=900vh",
      pin: true,
      scrub: 5,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCans = cansRef.current.length;

        cansRef.current.forEach((can, index) => {
          const canProgress = (progress * totalCans) - index;
          const clamped = Math.max(0, Math.min(1, canProgress));

          gsap.to(can, {
            y: clamped > 0 ? "0%" : "100%",
            opacity: clamped,
            scale: clamped > 0 ? 1 : 0.5,
            duration: 1.5,
            ease: "power4.out",
          });
        });
      },
    });

    // ✨ Animate heading stroke -> fill on scroll
    gsap.to(".monster-text", {
      scrollTrigger: {
        trigger: ".monster-text",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        toggleClass: { targets: ".monster-text", className: "fill" },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  <style>{`
    .monster-text {
  color: transparent;
  -webkit-text-stroke: 2px black;
  transition: color 0.4s ease;
}

.monster-text.fill {
  color: orange;
  -webkit-text-stroke: 0px;
}

    `}</style>

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen flex flex-col items-center justify-end text-black font-[monster-energy] font-bold text-center overflow-hidden"
      style={{
        // bg-[linear-gradient(180deg,#ffffff_0%,#a6cbed_30%,#f68d2a_50%,#000000_80%)]
        // background: "linear-gradient(180deg,#FFF8F0 0%,rgba(149, 214, 0, 1) 60%,rgba(0, 0, 0, 0.9) 75%,#000 90%)" 
        // background: "linear-gradient(180deg, #a6cbed -3.4%, #f68d2a 109.5%)" 
        background: "linear-gradient(180deg, #ffffff 0%, #f68d2a 50%, #000000 90%)" 
      }}
    >
      {/* Heading */}
      <div className="absolute top-20 text-center w-full z-10">
        <h1 className="monster-text text-4xl md:text-6xl lg:text-9xl uppercase font-extrabold tracking-tight">
          Unleash the <span className="text-[#95D600] "> Beast!</span>
        </h1>
        <p className="text-xl  font-bolder  text-white  selection:text-black selection:bg-white ">Ignite the rush within. Fuel your fire. Power every moment.
Stay sharp, go harder, and conquer limits with Monster Energy.</p>
      </div>

      {/* Can Container */}
      <div className="w-full flex justify-center items-end gap-6 pb-0 h-[50%] z-0">
        {[Img1, Img2, Img3, Img4, Img5].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Can ${i + 1}`}
            ref={(el) => (cansRef.current[i] = el)}
            className="w-20 md:w-28 lg:w-45 h-auto object-contain self-end"
            style={{
              transformOrigin: "bottom center",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default StaggerCan;