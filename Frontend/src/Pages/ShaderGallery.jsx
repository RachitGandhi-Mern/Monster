import React, { useEffect, useRef } from 'react';
import '../../Style/demo.css';

const ShaderGallery = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    // Canvas setup and WebGL logic will go here
    console.log("Canvas initialized:", canvas);
  }, []);

  return (
    <main className="bg-black text-white">
      <div className="content">
        <canvas ref={canvasRef}></canvas>
        <div className="container">
          <div className="grid">
            {[
              { src: "/assets/1.webp", title: "X05", artist: "Kenji Sato" },
              { src: "/assets/2.webp", title: "M33", artist: "Yusuke Tanaka" },
              { src: "/assets/3.webp", title: "Y78", artist: "Mei Yamamoto" },
              { src: "/assets/4.webp", title: "K08", artist: "Natsumi Ito" },
              { src: "/assets/5.webp", title: "F03", artist: "Miku Inoue" },
            ].map((item, index) => (
              <figure className={`img-wrap img-wrap-${index + 1}`} key={index}>
                <img
                  className="img"
                  src={item.src}
                  alt={item.artist}
                  data-webgl-media=""
                />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.artist}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShaderGallery;