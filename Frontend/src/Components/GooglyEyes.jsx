import React, { useEffect, useRef } from 'react';

const GooglyEyes = () => {
  const eyesRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  const eyes = [
    {
      eye: leftEyeRef,
      pupil: leftPupilRef,
      offsetX: 0,
    },
    {
      eye: rightEyeRef,
      pupil: rightPupilRef,
      offsetX: 0,
    },
  ];

  const calcOffset = () => {
    for (const { eye, pupil } of eyes) {
      pupil.current.removeAttribute('transform');
      const eyeRect = eye.current.getBoundingClientRect();
      const pupilRect = pupil.current.getBoundingClientRect();
      const offsetX = ((eyeRect.right - pupilRect.right) - (pupilRect.left - eyeRect.left)) / 2;
      eye.offsetX = offsetX;
    }
  };

  const updateEye = (ev, { eye, pupil, offsetX }) => {
    const eyeRect = eye.current.getBoundingClientRect();
    const centerX = eyeRect.left + eyeRect.width / 2;
    const centerY = eyeRect.top + eyeRect.height / 2;

    const distX = ev.clientX - centerX;
    const distY = ev.clientY - centerY;

    const pupilRect = pupil.current.getBoundingClientRect();
    const maxDistX = pupilRect.width / 2;
    const maxDistY = pupilRect.height / 2;

    const angle = Math.atan2(distY, distX);
    const newPupilX = offsetX + Math.min(maxDistX, Math.max(-maxDistX, Math.cos(angle) * maxDistX));
    const newPupilY = Math.min(maxDistY, Math.max(-maxDistY, Math.sin(angle) * maxDistY));

    const svgCTM = eyesRef.current.getScreenCTM();
    const scaledPupilX = newPupilX / svgCTM.a;
    const scaledPupilY = newPupilY / svgCTM.d;

    pupil.current.setAttribute('transform', `translate(${scaledPupilX}, ${scaledPupilY})`);
  };

  useEffect(() => {
    calcOffset();

    const handleResize = () => calcOffset();
    const handleMouseMove = (ev) => {
      for (const eye of eyes) {
        updateEye(ev, eye);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-[clamp(64px,30vw,256px)] h-[clamp(64px,30vw,256px)] mx-auto my-10">
      <svg
        ref={eyesRef}
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        aria-label="googly eyes emoji that track the mouse cursor"
      >
        <defs>
          <linearGradient id="a" x1="0" x2="0" y1="46.676" y2="82.083" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#424242" />
            <stop offset="1" stopColor="#212121" />
          </linearGradient>
          <g id="eye-shape">
            <path fill="#f9cdad" d="M34.16 106.51C18.73 106.51 6.19 87.44 6.19 64s12.55-42.51 27.97-42.51S62.13 40.56 62.13 64s-12.55 42.51-27.97 42.51" />
            <path
              fill="#000"
              d="M34.16 23.49c6.63 0 12.98 4 17.87 11.27 5.22 7.75 8.1 18.14 8.1 29.24s-2.88 21.49-8.1 29.24c-4.89 7.27-11.24 11.27-17.87 11.27s-12.98-4-17.87-11.27C11.06 85.49 8.19 75.1 8.19 64s2.88-21.49 8.1-29.24c4.89-7.27 11.23-11.27 17.87-11.27m0-4C17.61 19.49 4.19 39.42 4.19 64s13.42 44.51 29.97 44.51S64.13 88.58 64.13 64 50.71 19.49 34.16 19.49"
            />
          </g>
        </defs>

        {/* Left Eye */}
        <g ref={leftEyeRef}>
          <use href="#eye-shape" />
        </g>
        <path
          ref={leftPupilRef}
          fill="url(#a)"
          d="M25.63 59.84c-2.7-2.54-2.1-7.58 1.36-11.26.18-.19.36-.37.55-.54-1.54-.87-3.23-1.36-5.01-1.36-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05-3.24 2.33-7.11 2.64-9.38.51"
        />

        {/* Right Eye */}
        <g transform="translate(59.68 0)" ref={rightEyeRef}>
          <use href="#eye-shape" />
        </g>
        <path
          ref={rightPupilRef}
          fill="url(#a)"
          d="M85.31 59.84c-2.7-2.54-2.1-7.58 1.36-11.26.18-.19.36-.37.55-.54-1.54-.87-3.23-1.36-5.01-1.36-7.19 0-13.02 7.93-13.02 17.7s5.83 17.7 13.02 17.7 13.02-7.93 13.02-17.7c0-1.75-.19-3.45-.54-5.05-3.23 2.33-7.11 2.64-9.38.51"
        />
      </svg>
    </div>
  );
};

export default GooglyEyes;