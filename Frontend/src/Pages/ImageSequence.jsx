// import { useEffect, useRef } from "react";

// const ImageSequence = () => {
//   const canvasRef = useRef(null);
//   const parentRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     const frames = {
//       currentIndex: 0,
//       maxIndex: 369,
//     };

//     let imagesLoaded = 0;
//     const images = [];

//     function preloadImages() {
//       for (let i = 1; i <= frames.maxIndex; i++) {
//         const imageUrl = `/Frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
//         const img = new Image();
//         img.src = imageUrl;
//         img.onload = () => {
//           imagesLoaded++;
//           console.log(`Loaded image ${imagesLoaded}/${frames.maxIndex}`);
//           if (imagesLoaded === frames.maxIndex) {
//             console.log("All images loaded, starting animation");
//             loadImage(frames.currentIndex);
//             startAnimation();
//           }
//         };
//         img.onerror = () => {
//           console.error(`Failed to load image: ${imageUrl}`);
//         };
//         images.push(img);
//       }
//     }

//     function loadImage(index) {
//       if (index >= 0 && index < frames.maxIndex) {
//         const img = images[index];
//         if (img && img.complete) {
//           canvas.width = window.innerWidth;
//           canvas.height = window.innerHeight;

//           const scaleX = canvas.width / img.width;
//           const scaleY = canvas.height / img.height;
//           const scale = Math.max(scaleX, scaleY);
//           const newWidth = img.width * scale;
//           const newHeight = img.height * scale;

//           const offsetX = (canvas.width - newWidth) / 2;
//           const offsetY = (canvas.height - newHeight) / 2;

//           context.clearRect(0, 0, canvas.width, canvas.height);
//           context.imageSmoothingQuality = "high";
//           context.imageSmoothingEnabled = true;
//           context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
//           frames.currentIndex = index;
//         }
//       }
//     }

//     function startAnimation() {
//       let isScrolling = false;

//       const handleScroll = () => {
//         const scrollTop =
//           window.pageYOffset || document.documentElement.scrollTop;
//         const scrollHeight =
//           document.documentElement.scrollHeight - window.innerHeight;
//         const scrollPercent = scrollTop / scrollHeight;

//         const targetIndex = Math.floor(scrollPercent * (frames.maxIndex - 1));

//         if (!isScrolling) {
//           isScrolling = true;
//           requestAnimationFrame(() => {
//             loadImage(targetIndex);
//             isScrolling = false;
//           });
//         }
//       };

//       window.addEventListener("scroll", handleScroll);

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     }

//     // Resize handler
//     const handleResize = () => {
//       if (images.length > 0) {
//         loadImage(frames.currentIndex);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     preloadImages();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div className="w-full bg-black">
//       <div
//         ref={parentRef}
//         className="parent h-full"
//       />
//       <div className="w-full sticky top-0 left-0 h-screen">
//         <canvas ref={canvasRef} className="w-full h-screen" id="frame" />
//       </div>
//     </div>
//   );
// };

// export default ImageSequence;








// import { useEffect, useRef } from "react";

// const ImageSequence = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Load GSAP and ScrollTrigger from CDN
//     const loadGSAP = () => {
//       return new Promise((resolve) => {
//         if (window.gsap && window.ScrollTrigger) {
//           resolve();
//           return;
//         }

//         const script1 = document.createElement('script');
//         script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//         script1.onload = () => {
//           const script2 = document.createElement('script');
//           script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
//           script2.onload = () => {
//             window.gsap.registerPlugin(window.ScrollTrigger);
//             resolve();
//           };
//           document.head.appendChild(script2);
//         };
//         document.head.appendChild(script1);
//       });
//     };

//     const initCanvas = async () => {
//       try {
//         await loadGSAP();
        
//         const canvas = canvasRef.current;
//         if (!canvas) return;
        
//         const context = canvas.getContext("2d");
        
//         const frames = {
//           currentIndex: 0,
//           maxIndex: 369,
//         };
        
//         const imageSeq = { frame: 0 };
//         let imagesLoaded = 0;
//         const images = [];

//         // Set canvas size
//         const resizeCanvas = () => {
//           canvas.width = window.innerWidth;
//           canvas.height = window.innerHeight;
//           if (images[frames.currentIndex] && images[frames.currentIndex].complete) {
//             loadImage(frames.currentIndex);
//           }
//         };
        
//         resizeCanvas();
//         window.addEventListener('resize', resizeCanvas);

//         function preloadImages() {
//           return new Promise((resolve) => {
//             for (let i = 1; i <= frames.maxIndex; i++) {
//               const imageUrl = `/Frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
//               const img = new Image();
//               img.src = imageUrl;
              
//               img.onload = () => {
//                 imagesLoaded++;
//                 console.log(`Loaded image ${imagesLoaded}/${frames.maxIndex}`);
                
//                 if (imagesLoaded === 1) {
//                   // Load first image immediately
//                   loadImage(0);
//                 }
                
//                 if (imagesLoaded === frames.maxIndex) {
//                   console.log("All images loaded, starting animation");
//                   resolve();
//                 }
//               };
              
//               img.onerror = () => {
//                 console.error(`Failed to load image: ${imageUrl}`);
//                 imagesLoaded++;
//                 if (imagesLoaded === frames.maxIndex) {
//                   resolve();
//                 }
//               };
              
//               images.push(img);
//             }
//           });
//         }

//         function loadImage(index) {
//           if (index >= 0 && index < frames.maxIndex) {
//             const img = images[index];
//             if (img && img.complete) {
//               const scaleX = canvas.width / img.width;
//               const scaleY = canvas.height / img.height;
//               const scale = Math.max(scaleX, scaleY);
//               const newWidth = img.width * scale;
//               const newHeight = img.height * scale;
//               const offsetX = (canvas.width - newWidth) / 2;
//               const offsetY = (canvas.height - newHeight) / 2;
              
//               context.clearRect(0, 0, canvas.width, canvas.height);
//               context.imageSmoothingQuality = "high";
//               context.imageSmoothingEnabled = true;
//               context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
//               frames.currentIndex = index;
//             }
//           }
//         }

//         function renderFrame() {
//           const currentFrame = Math.floor(imageSeq.frame);
//           loadImage(currentFrame);
//         }

//         // Start loading images
//         console.log('Starting image load...');
//         await preloadImages();
        
//         // Setup GSAP animation with scroll pinning
//         console.log('Setting up GSAP...');
        
//         window.gsap.to(imageSeq, {
//           frame: frames.maxIndex - 1,
//           snap: 'frame',
//           ease: 'none',
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top top',
//             end: '300% top', // This creates the scroll distance needed to go through all frames
//             scrub: 0.15,
//             pin: containerRef.current, // Pin the container while scrolling through frames
//           },
//           onUpdate: renderFrame,
//         });

//         // Cleanup function
//         return () => {
//           window.removeEventListener('resize', resizeCanvas);
//           if (window.ScrollTrigger) {
//             window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//           }
//         };

//       } catch (error) {
//         console.error('Canvas initialization error:', error);
        
//         // Show error on canvas
//         const canvas = canvasRef.current;
//         if (canvas) {
//           const context = canvas.getContext('2d');
//           canvas.width = window.innerWidth;
//           canvas.height = window.innerHeight;
          
//           context.fillStyle = '#f0f0f0';
//           context.fillRect(0, 0, canvas.width, canvas.height);
//           context.fillStyle = '#ff0000';
//           context.font = '24px Arial';
//           context.textAlign = 'center';
//           context.fillText('Error loading animation', canvas.width / 2, canvas.height / 2);
//           context.fillText('Check console for details', canvas.width / 2, canvas.height / 2 + 30);
//         }
//       }
//     };

//     const cleanup = initCanvas();
//     return () => {
//       if (cleanup && typeof cleanup.then === 'function') {
//         cleanup.then(cleanupFn => cleanupFn && cleanupFn());
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full bg-black">
//       <div
//         ref={containerRef}
//         className="w-full h-screen relative"
//       >
//         <canvas ref={canvasRef} className="w-full h-screen" id="frame" />
//       </div>
//     </div>
//   );
// };

// export default ImageSequence;




import React, { useEffect, useRef } from 'react';

const ImageSequence = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load GSAP and ScrollTrigger from CDN
    const loadGSAP = () => {
      return new Promise((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          resolve();
          return;
        }

        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script1.onload = () => {
          const script2 = document.createElement('script');
          script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
          script2.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger);
            resolve();
          };
          document.head.appendChild(script2);
        };
        document.head.appendChild(script1);
      });
    };

    const initCanvas = async () => {
      try {
        await loadGSAP();
        
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        
        // Canvas variables
        const frameCount = 369;
        const images = new Array(frameCount);
        const imageSeq = { frame: 0 };
        
        // Set canvas size
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          if (images[0] && images[0].complete) {
            renderFrame();
          }
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Function to get image path
        function getImagePath(index) {
          const frameNumber = String(index + 1).padStart(4, '0');
          const path = `/Frames/frame_${frameNumber}.jpeg`;
          console.log('Trying to load:', path);
          return path;
        }

        // Scale and draw image on canvas
        function scaleImage(img, ctx) {
          if (!img || !ctx || !img.complete) return;
          
          const canvas = ctx.canvas;
          const hRatio = canvas.width / img.width;
          const vRatio = canvas.height / img.height;
          const ratio = Math.max(hRatio, vRatio);
          const centerShift_x = (canvas.width - img.width * ratio) / 2;
          const centerShift_y = (canvas.height - img.height * ratio) / 2;
          
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y,
            img.width * ratio, img.height * ratio
          );
        }

        function renderFrame() {
          const currentFrame = Math.floor(imageSeq.frame);
          if (images[currentFrame] && images[currentFrame].complete) {
            scaleImage(images[currentFrame], context);
          }
        }

        // Load all images
        function loadImages() {
          return new Promise((resolve) => {
            let loadedCount = 0;
            let errorCount = 0;
            
            for (let i = 0; i < frameCount; i++) {
              const img = new Image();
              images[i] = img;
              
              img.onload = function() {
                loadedCount++;
                console.log(`Loaded: ${loadedCount}/${frameCount}`);
                
                if (loadedCount === 1) {
                  // Render first image
                  imageSeq.frame = 0;
                  renderFrame();
                }
                
                if (loadedCount + errorCount === frameCount) {
                  console.log('All images processed!');
                  resolve();
                }
              };
              
              img.onerror = function(e) {
                errorCount++;
                console.error(`Failed to load image ${i + 1}:`, getImagePath(i), e);
                
                if (loadedCount + errorCount === frameCount) {
                  resolve();
                }
              };
              
              img.src = getImagePath(i);
            }
          });
        }

        // Start loading images
        console.log('Starting image load...');
        await loadImages();
        
        // Setup GSAP animation
        console.log('Setting up GSAP...');
        
        window.gsap.to(imageSeq, {
          frame: frameCount - 1,
          snap: 'frame',
          ease: 'none',
          scrollTrigger: {
            trigger: canvas,
            start: 'top top',
            end: '300% top',
            scrub: 0.15,
            pin: containerRef.current,
          },
          onUpdate: renderFrame,
        });

        // Text animation setup
        const textElements = document.querySelectorAll('.canvas-text h4');
        textElements.forEach((h) => {
          let clutterc = '';
          h.textContent.split('').forEach((l) => {
            clutterc += `<span style="display: inline-block;">${l}</span>`;
          });
          h.innerHTML = clutterc;
        });

        // Text animation timeline
        const tlc = window.gsap.timeline({
          scrollTrigger: {
            trigger: canvas,
            start: 'top -10%',
            end: 'top -250%',
            scrub: 1,
          },
        });

        tlc
          .to('.canvas-text-wrap .h41 span', {
            transform: 'translateY(-140%)',
            stagger: { amount: 0.4 },
            duration: 0.6,
          })
          .to('.canvas-text-wrap .h42 span', {
            transform: 'translateY(-100%)',
            stagger: { amount: 0.4 },
            duration: 0.6,
          })
          .to('.canvas-text-wrap .h42 span', {
            transform: 'translateY(-230%)',
            stagger: { amount: 0.4 },
            duration: 0.6,
          })
          .to('.canvas-text-wrap .h43 span', {
            transform: 'translateY(-200%)',
            stagger: { amount: 0.4 },
            duration: 0.6,
          });

        // Cleanup function
        return () => {
          window.removeEventListener('resize', resizeCanvas);
          if (window.ScrollTrigger) {
            window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          }
        };

      } catch (error) {
        console.error('Canvas initialization error:', error);
        
        // Show error on canvas
        const canvas = canvasRef.current;
        if (canvas) {
          const context = canvas.getContext('2d');
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          
          context.fillStyle = '#f0f0f0';
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = '#ff0000';
          context.font = '24px Arial';
          context.textAlign = 'center';
          context.fillText('Error loading animation', canvas.width / 2, canvas.height / 2);
          context.fillText('Check console for details', canvas.width / 2, canvas.height / 2 + 30);
        }
      }
    };

    const cleanup = initCanvas();
    return () => {
      if (cleanup && typeof cleanup.then === 'function') {
        cleanup.then(cleanupFn => cleanupFn && cleanupFn());
      }
    };
  }, []);

  return (
    <>
      
      <section
        ref={containerRef}
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          backgroundColor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            width: '100%',
            zIndex: 2,
            display: 'flex',
            alignItems: 'end',
            justifyContent: 'start',
            padding: '4vw 2vw',
            pointerEvents: 'none',
          }}
        >
        </div>
      </section>
    </>
  );
};

export default ImageSequence;