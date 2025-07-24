// import React, { useEffect } from "react";
// import "./Loading.scss";
// import gsap from "gsap";

// const Loading = () => {
//   useEffect(() => {
//     const counterElement = document.querySelector(".counter");
//     let currentValue = 0;

//     function updateCounter() {
//       if (currentValue === 100) return;

//       currentValue += Math.floor(Math.random() * 10) + 1;
//       if (currentValue > 100) currentValue = 100;

//       counterElement.textContent = currentValue;

//       const delay = Math.floor(Math.random() * 200) + 250;
//       setTimeout(updateCounter, delay);
//     }

//     updateCounter();

//     gsap.to(".counter", {
//       opacity: 1,
//       delay: 3.5,
//       duration: 0.25,
//     });
//   }, []);

//   return (
//     <div>
//       <link
//         href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700"
//         rel="stylesheet"
//         type="text/css"
//       />
//       <div className="loading wave ">Monster</div>
//       <h1 className="counter">0</h1>
//     </div>
//   );
// };

// export default Loading









//! loader with out Video and Images Delay 
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import "./Loading.scss";


// const Loading = ({ onLoadingComplete }) => {
//   const counterRef = useRef(null);
//   let currentValue = 0;

//   useEffect(() => {
//     function finish() {
//       if (onLoadingComplete) onLoadingComplete();
//     }

//     function updateCounter() {
//       if (currentValue >= 100) {
//         gsap.to(counterRef.current, {
//           opacity: 1,
//           delay: 0.2,
//           duration: 0.25,
//           onComplete: finish,
//         });
//         return;
//       }

//       currentValue += Math.floor(Math.random() * 10) + 1;
//       if (currentValue > 100) currentValue = 100;

//       if(counterRef.current){
//         counterRef.current.textContent = currentValue;
//       }

//       const delay = Math.floor(Math.random() * 200) + 290;
//       setTimeout(updateCounter, delay);
//     }

//     updateCounter();
//   }, [onLoadingComplete]);

//   return (
//     <div>
//       <link
//         href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700"
//         rel="stylesheet"
//         type="text/css"
//       />
//       <div className="loading wave">Monster</div>
//       <h1 ref={counterRef} className="counter font-[JoganSoft]">
//         0
//       </h1>
//     </div>
//   );
// };

// export default Loading;





//! loader with Video and Images Delay 
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Loading.scss";

const Loading = ({ onLoadingComplete }) => {
  const counterRef = useRef(null);
  const containerRef = useRef(null);

  const [counterDone, setCounterDone] = useState(false);
  const [assetsDone, setAssetsDone] = useState(false);

  // Step 1: Counter logic
  useEffect(() => {
    let currentValue = 0;

    const updateCounter = () => {
      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;

      if (counterRef.current) {
        counterRef.current.textContent = currentValue;
      }

      if (currentValue < 100) {
        const delay = Math.floor(Math.random() * 390) + 260; // slower pace
        setTimeout(updateCounter, delay);
      } else {
        setCounterDone(true);
      }
    };

    updateCounter();
  }, []);

  // Step 2: Asset loading logic
  useEffect(() => {
    let totalAssets = 0;
    let loadedAssets = 0;

    const handleAssetLoad = () => {
      loadedAssets += 1;
      if (loadedAssets >= totalAssets) {
        setAssetsDone(true);
      }
    };

    const images = Array.from(document.images);
    const videos = Array.from(document.querySelectorAll("video"));

    totalAssets = images.length + videos.length;

    if (totalAssets === 0) {
      setAssetsDone(true);
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        handleAssetLoad();
      } else {
        img.addEventListener("load", handleAssetLoad);
        img.addEventListener("error", handleAssetLoad);
      }
    });

    videos.forEach((video) => {
      if (video.readyState >= 3) {
        handleAssetLoad();
      } else {
        video.addEventListener("loadeddata", handleAssetLoad);
        video.addEventListener("error", handleAssetLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleAssetLoad);
        img.removeEventListener("error", handleAssetLoad);
      });
      videos.forEach((video) => {
        video.removeEventListener("loadeddata", handleAssetLoad);
        video.removeEventListener("error", handleAssetLoad);
      });
    };
  }, []);

  // Step 3: Fade out after both counter + assets done
  useEffect(() => {
    if (assetsDone && counterDone) {
      setTimeout(() => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (onLoadingComplete) onLoadingComplete();
            },
          });
        } else {
          if (onLoadingComplete) onLoadingComplete();
        }
      }, 1980); // Delay after both done (2 seconds)
    }
  }, [assetsDone, counterDone, onLoadingComplete]);

  return (
    <div ref={containerRef} className="loading-container">
      <link
        href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="loading wave">Monster</div>
      <h1 ref={counterRef} className="counter font-[JoganSoft]">
        0
      </h1>
    </div>
  );
};

export default Loading;



