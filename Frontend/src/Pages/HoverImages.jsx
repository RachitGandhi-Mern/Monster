// App.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const images = [
  "https://images.unsplash.com/photo-1588180891305-0e6de022e52d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9uc3RlciUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uc3RlciUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1654346297666-cef263197840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vbnN0ZXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1735402663169-ef777b2c082a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbnN0ZXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1644204571295-4b83e175e78b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vbnN0ZXIlMjBlbmVyZ3l8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1575844261401-d69721eb5044?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vbnN0ZXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1580321187070-da8bdee36013?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1667608386999-bc20b98ef329?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9uc3RlcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1635433608003-b71b95ad97b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxtb25zdGVyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1748968218836-b63c9e67551f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxtb25zdGVyfGVufDB8fDB8fHww"
];

const HoverImages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.utils.toArray(".float-image").forEach((el) => {
      gsap.to(el, {
        y: "random(-10, 30)",
        x: "random(-10, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 2)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    gsap.utils.toArray(".float-image").forEach((el) => {
      Draggable.create(el, {
        bounds: containerRef.current,
        inertia: true,
      });
    });
  }, []);

  

  return (
    <div
    drag
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center font-[helvatica]"
    >
      <h1 className="text-[10vw] font-black bg-gradient-to-r from-[#FFA500] via-[#FF6B00] to-[#FF3C00] text-transparent bg-clip-text absolute z-0">SOCIAL</h1>
      <h3 className=" z-10 text-5xl bg-gradient-to-r from-[#B3ECFF] via-[#D5C7FF] to-[#F0F0F0] text-transparent bg-clip-text">Fuel your fire. Dominate the day. Monster wins.</h3>

      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="float-image absolute w-[200px] h-[250px] object-cover rounded-md cursor-pointer"
          style={{
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 80 + 5}%`,
            zIndex: 10,
          }}
        />
      ))}
    </div>
  );
};

export default HoverImages;