import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MG1 from "../assets/Images/MG1.png"
import MG2 from "../assets/Images/MG2.png"
import MG3 from "../assets/Images/MG3.png"
import MG4 from "../assets/Images/MG4.png"
import MG5 from "../assets/Images/MG5.png" 
import MG6 from "../assets/Images/MG6.png"

const images = [
  {
    url: MG1,
    title: "MONSTER ENERGY",
    paragraph: "Monster’s heart beats with city steel—shadows, speed, and chaos forged into pure power."
  },
  {
    url: MG2,
    title: "ENERGY ULTRA",
    paragraph: "Ultra hits different—crisp, clean, and charged with electric precision. Pure power, zero drag."
  },
  {
    url: MG3,
    title: "SHADOW FORCE",
    paragraph: "The shadows don't hide us. They sharpen us. Monster thrives where others fear to tread."
  },
  {
    url:MG4,
    title: "PURE IMPACT",
    paragraph: "Nothing diluted here. No sugarcoating. Just a full-force punch of flavor, energy, and attitude."
  },
  {
    url:MG5,
    title: "MONOCHROME POWER",
    paragraph: "Black. Bold. Brutal. The Monster aesthetic smokes subtlety in favor of full-volume edge."
  },
  {
    url: MG6,
    title: "TEXTURED FURY",
    paragraph: "Grit and grind. Texture that talks. Every line on this beast tells a battle-hardened story."
  }
];

const MonsterGallery = () => {
  const [mode, setMode] = useState('grid');
  const [activeIndex, setActiveIndex] = useState(4);

  const toggleMode = (target) => {
    setMode(target);
  };

  return (
    <div className="bg-black text-neutral-100 w-screen h-screen overflow-hidden font-mono relative">
      {/* Switch Buttons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 bg-zinc-900 p-3 rounded">
        <button
          onClick={() => toggleMode("grid")}
          className={`text-sm tracking-wide ${mode === 'grid' ? 'text-green-400' : 'text-zinc-500'} hover:text-green-400`}
        >
          GRID
        </button>
        <button
          onClick={() => toggleMode("slider")}
          className={`text-sm tracking-wide ${mode === 'slider' ? 'text-green-400' : 'text-zinc-500'} hover:text-green-400`}
        >
          SLIDER
        </button>
      </div>

      {/* Grid Mode */}
      {mode === 'grid' && (
        <div className="grid grid-cols-3 grid-rows-2 w-full h-full">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full h-full">
              <div
                onClick={() => {
                  setActiveIndex(idx);
                  setMode('slider');
                }}
                className="w-full h-full bg-center bg-cover cursor-pointer transition-transform duration-500 hover:scale-105 "
                style={{ backgroundImage: `url(${img.url})`}}
              ></div>
            </div>
          ))}
        </div>
      )}

      {/* Slider Mode */}
      {mode === 'slider' && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="absolute inset-0 w-full h-full bg-black bg-cover bg-center z-20 transition duration-700"
            style={{ backgroundImage: `url(${images[activeIndex].url})`}}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="absolute z-30 bottom-20 left-10 max-w-lg">
              <h1 className="text-4xl md:text-6xl font-black text-green-400 uppercase tracking-tight mb-4">
                {images[activeIndex].title}
              </h1>
              <p className="text-sm md:text-base text-neutral-200 leading-snug">
                {images[activeIndex].paragraph}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-30">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-14 h-9 bg-center bg-cover cursor-pointer rounded-md transition-all duration-300 ${activeIndex === idx ? 'ring-2 ring-green-400' : 'opacity-60 hover:opacity-100'}`}
                  style={{ backgroundImage: `url(${img.url})` }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default MonsterGallery;
