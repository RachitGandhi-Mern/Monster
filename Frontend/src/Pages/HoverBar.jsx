//! Original Code But NOt Responsive

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Hoverbar = () => {
//   const containerRef = useRef(null);
//   const movingImageRef = useRef(null);
//   const moveImgRef = useRef(null);

//   useEffect(() => {
//     const elementContainer = containerRef.current;
//     const movingImage = movingImageRef.current;
//     const moveImg = moveImgRef.current;
//     const allElements = elementContainer.querySelectorAll(".element");

//     // SHOW image on mouse enter
//     elementContainer.addEventListener("mouseenter", () => {
//       gsap.to(movingImage, {
//         opacity: 1,
//         duration: 0.5,
//       });
//     });

//     // HIDE image on mouse leave
//     elementContainer.addEventListener("mouseleave", () => {
//       gsap.to(movingImage, {
//         opacity: 0,
//         duration: 0.5,
//       });
//     });

//     // IMAGE PREVIEW + FOLLOW MOUSE
//     allElements.forEach((elem) => {
//       elem.addEventListener("mouseenter", () => {
//         const image = elem.getAttribute("data-image");
//         gsap.to(moveImg, {
//           attr: { src: image },
//           duration: 0.3,
//         });
//       });

//       elem.addEventListener("mousemove", (e) => {
//         const bounds = elementContainer.getBoundingClientRect();
//         gsap.to(movingImage, {
//           left: `${e.clientX - bounds.left}px`,
//           top: `${e.clientY - bounds.top}px`,
//           duration: 1.2,
//           ease: "power2.out",
//         });
//       });
//     });

//     // 👇 Call the text animation
//     page1Text();

//     // Optional: cleanup listeners on unmount
//     return () => {
//       elementContainer.replaceWith(elementContainer.cloneNode(true));
//     };
//   }, []);

//   // 👇 Text Split Animation Function
//   function page1Text() {
//     const allText = document.querySelectorAll(".page1-text h1");

//     allText.forEach((elem) => {
//       const text = elem.textContent;
//       const splitted = text.split("");
//       const clutter = splitted.map((char) => `<span>${char}</span>`).join("");
//       elem.innerHTML = clutter;
//     });

//     gsap.from(".page1-text h1 span", {
//       y: 300,
//       opacity: 0,
//       delay: 0.5,
//       duration: 0.6,
//       stagger: 0.06,
//       ease: "power4.out",
//     });
//   }

//   return (
//     <div id="page4" className="min-h-screen bg-[#FFF8F0] w-full px-[2vw] py-[5vh] relative overflow-hidden">
      
//       {/* Header Text Section */}
//       <div className="relative page1-text bg-[url('https://images.unsplash.com/photo-1594905666013-8f11171b8d6d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat min-h-[10vh] w-full">
//         <h1 className="w-full p-5 text-[7.5vw] leading-[7.2vw] text-center font-medium text-white mix-blend-exclusion font-[helvatica]">
//           POWERED BY CHAOS
//         </h1>
//       </div>

//       {/* Hover Element Container */}
//       <div ref={containerRef} className="relative mt-[3vw] font-[JoganSoft]">
//         {/* Floating Preview Image */}
//         <div
//           ref={movingImageRef}
//           className="h-[26vw] w-[20vw] bg-black absolute opacity-0 z-[8] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//         >
//           <img
//             ref={moveImgRef}
//             src=""
//             alt="preview"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Hover Elements */}
//         {[
//           {
//             title: "HIGH-VOLTAGE BRANDING",
//             image: "https://i.pinimg.com/736x/64/e8/52/64e852694405aca178491707cd3db944.jpg",
//           },
//           {
//             title: "INSANE WEB BUILDS",
//             image: "https://img.lazcdn.com/g/p/167217a4529d75bce5207647b1da2229.jpg_720x720q80.jpg",
//           },
//           {
//             title: "FEARLESS IDENTITY DESIGN",
//             image: "https://i.pinimg.com/736x/74/fe/b7/74feb72edc9427cebf23637123442cf1.jpg",
//           },
//           {
//             title: "WEB DEV GONE WILD",
//             image: "https://i.pinimg.com/736x/3d/7a/39/3d7a39df41f6a93c24fb23f927e413e4.jpg",
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="element py-[6vh] border-t border-black relative cursor-pointer"
//             data-image={item.image}
//           >
//             <div className="overlay absolute top-0 left-0 w-full h-full z-[9]"></div>
//             <h2 className="text-[2.5vw] uppercase font-light relative z-10">{item.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hoverbar;






// ! Responsive Code With Image Revel On Mobile

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hoverbar = () => {
  const containerRef = useRef(null);
  const movingImageRef = useRef(null);
  const moveImgRef = useRef(null);

  useEffect(() => {
    const elementContainer = containerRef.current;
    const movingImage = movingImageRef.current;
    const moveImg = moveImgRef.current;
    const allElements = elementContainer.querySelectorAll(".element");

    elementContainer.addEventListener("mouseenter", () => {
      if (window.innerWidth < 768) return;
      gsap.to(movingImage, {
        opacity: 1,
        duration: 0.5,
      });
    });

    elementContainer.addEventListener("mouseleave", () => {
      if (window.innerWidth < 768) return;
      gsap.to(movingImage, {
        opacity: 0,
        duration: 0.5,
      });
    });

    allElements.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        if (window.innerWidth < 768) return;
        const image = elem.getAttribute("data-image");
        gsap.to(moveImg, {
          attr: { src: image },
          duration: 0.3,
        });
      });

      elem.addEventListener("mousemove", (e) => {
        if (window.innerWidth < 768) return;
        const bounds = elementContainer.getBoundingClientRect();
        gsap.to(movingImage, {
          left: `${e.clientX - bounds.left}px`,
          top: `${e.clientY - bounds.top}px`,
          duration: 1.2,
          ease: "power2.out",
        });
      });
    });

    page1Text();

    return () => {
      elementContainer.replaceWith(elementContainer.cloneNode(true));
    };
  }, []);

  function page1Text() {
    const allText = document.querySelectorAll(".page1-text h1");

    allText.forEach((elem) => {
      const text = elem.textContent;
      const splitted = text.split("");
      const clutter = splitted.map((char) => `<span>${char}</span>`).join("");
      elem.innerHTML = clutter;
    });

    gsap.from(".page1-text h1 span", {
      y: 300,
      opacity: 0,
      delay: 0.5,
      duration: 0.6,
      stagger: 0.06,
      ease: "power4.out",
    });
  }

  const hoverItems = [
    {
      title: "HIGH-VOLTAGE BRANDING",
      image: "https://i.pinimg.com/736x/64/e8/52/64e852694405aca178491707cd3db944.jpg",
    },
    {
      title: "INSANE WEB BUILDS",
      image: "https://img.lazcdn.com/g/p/167217a4529d75bce5207647b1da2229.jpg_720x720q80.jpg",
    },
    {
      title: "FEARLESS IDENTITY DESIGN",
      image: "https://i.pinimg.com/736x/74/fe/b7/74feb72edc9427cebf23637123442cf1.jpg",
    },
    {
      title: "WEB DEV GONE WILD",
      image: "https://i.pinimg.com/736x/3d/7a/39/3d7a39df41f6a93c24fb23f927e413e4.jpg",
    },
  ];

  return (
    <div id="page4" className="min-h-screen bg-[#FFF8F0] w-full px-[2vw] py-[5vh] relative overflow-hidden">

      {/* Header */}
      <div className="relative page1-text bg-[url('https://images.unsplash.com/photo-1594905666013-8f11171b8d6d?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat min-h-[10vh] w-full">
        <h1 className="w-full p-4 sm:p-5 text-[9vw] sm:text-[7.5vw] leading-[9vw] sm:leading-[7.2vw] text-center font-medium text-white mix-blend-exclusion font-[helvatica]">
          POWERED BY CHAOS
        </h1>
      </div>

      {/* Hover Section */}
      <div ref={containerRef} className="relative mt-[6vw] sm:mt-[3vw] font-[JoganSoft] pb-[5vh]">

        {/* Floating Image ← now only desktop */}
        <div
          ref={movingImageRef}
          className="hidden sm:block h-[26vw] w-[20vw] bg-black absolute opacity-0 z-[8] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <img ref={moveImgRef} src="" alt="preview" className="h-full w-full object-cover" />
        </div>

        {/* List of Items with Responsive Preview on Mobile */}
        {hoverItems.map((item, index) => (
          <div
            key={index}
            className="element py-[5vw] sm:py-[6vh] border-t border-black relative cursor-pointer"
            data-image={item.image}
          >
            <div className="overlay absolute top-0 left-0 w-full h-full z-[9]"></div>
            <h2 className="text-[6vw] sm:text-[2.5vw] uppercase font-light relative z-10 text-black">
              {item.title}
            </h2>

            {/* Static image preview for mobile */}
            <div className="block sm:hidden mt-[4vw] w-full h-auto rounded overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hoverbar;
