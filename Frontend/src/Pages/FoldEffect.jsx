// FoldEffect.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FoldEffect.css";

const FoldEffect = () => {
  const screenRef = useRef(null);
  const centerContentRef = useRef(null);
  const centerFoldRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const marquees = screenRef.current.querySelectorAll(".marquee");

    marquees.forEach((el, index) => {
      const w = el.querySelector(".track");
      const [x, xEnd] = index % 2 === 0 ? [-500, -1500] : [-500, 0];

      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            scrub: 1,
          },
        }
      );
    });

    const foldsContent = screenRef.current.querySelectorAll(".fold-content");

    let targetScroll = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );
    let currentScroll = targetScroll;

    const tick = () => {
      const overflowHeight =
        centerContentRef.current.clientHeight -
        centerFoldRef.current.clientHeight;

      document.body.style.height = `${
        overflowHeight + window.innerHeight
      }px`;

      targetScroll = -(
        document.documentElement.scrollTop || document.body.scrollTop
      );
      currentScroll += (targetScroll - currentScroll) * 0.1;

      foldsContent.forEach((content) => {
        content.style.transform = `translateY(${currentScroll}px)`;
      });

      requestAnimationFrame(tick);
    };

    tick();
  }, []);

  return (
    <div className="screen" id="fold-effect" ref={screenRef}>
      <div className="wrapper-3d">
        {["fold-top", "fold-center", "fold-bottom"].map((fold, idx) => (
          <div
            key={fold}
            className={`fold ${fold}`}
            id={fold === "fold-center" ? "center-fold" : undefined}
            ref={fold === "fold-center" ? centerFoldRef : null}
          >
            <div className="fold-align">
              <div
                className="fold-content"
                ref={fold === "fold-center" ? centerContentRef : null}
              >
                {["Creators", "Thinkers", "Innovators", "Rebels"].map(
                  (word, i) => (
                    <div className="marquee" key={i}>
                      <div className="track">
                        {Array(6)
                          .fill(`${word}.`)
                          .join("")}
                        <span className="-focus">{word}.</span>
                        {Array(6)
                          .fill(`${word}.`)
                          .join("")}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoldEffect;
