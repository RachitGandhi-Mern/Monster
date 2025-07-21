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









//! current loader 

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Loading.scss";


const Loading = ({ onLoadingComplete }) => {
  const counterRef = useRef(null);
  let currentValue = 0;

  useEffect(() => {
    function finish() {
      if (onLoadingComplete) onLoadingComplete();
    }

    function updateCounter() {
      if (currentValue >= 100) {
        gsap.to(counterRef.current, {
          opacity: 1,
          delay: 0.2,
          duration: 0.25,
          onComplete: finish,
        });
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;

      if(counterRef.current){
        counterRef.current.textContent = currentValue;
      }

      const delay = Math.floor(Math.random() * 200) + 290;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }, [onLoadingComplete]);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Cabin+Condensed:700"
        rel="stylesheet"
        type="text/css"
      />
      <div className="loading wave">Monster</div>
      <h1 ref={counterRef} className="counter">
        0
      </h1>
    </div>
  );
};

export default Loading;
