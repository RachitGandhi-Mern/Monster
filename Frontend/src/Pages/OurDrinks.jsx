

//! Current Code Which IS Responsive Also 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HC1 from "../assets/Images/HC1.png";
import HC2 from "../assets/Images/HC2.png";
import HC3 from "../assets/Images/HC3.png";
import HC4 from "../assets/Images/HC4.png";
import HC5 from "../assets/Images/HC5.png";
import HC6 from "../assets/Images/HC6.png";
import BG1 from "../assets/Images/HoverCan1.png";
import BG2 from "../assets/Images/HoverCan2.png";
import BG3 from "../assets/Images/HoverCan3.png";
import BG4 from "../assets/Images/HoverCan3.png";
import BG5 from "../assets/Images/HoverCan3.png";
import BG6 from "../assets/Images/HoverCan3.png";

const drinks = [
  {
    id: "energy-ultra",
    title: "Energy Ultra",
    price: "From £1.87 /can",
    img: HC1,
    hoverBg: BG1,
    description: "Boost your energy instantly with our Energy Ultra drink.",
    flavor: "Citrus",
    volume: "500ml"
  },
  {
    id: "session-ipa",
    title: "SESSION IPA",
    price: "From £1.87 /can",
    img: HC2,
    hoverBg: BG2,
    description: "Smooth and crisp IPA with a hoppy finish.",
    flavor: "Hop",
    volume: "330ml"
  },
  {
    id: "mixed",
    title: "MIXED",
    price: "From £1.87 /can",
    img: HC3,
    hoverBg: BG3,
    description: "A mix pack of all our favorite flavors.",
    flavor: "Variety",
    volume: "6 Pack"
  },
  {
    id: "classic-cola",
    title: "Classic Cola",
    price: "From £1.75 /can",
    img: HC4,
    hoverBg: BG4,
    description: "Timeless cola taste with real sugar.",
    flavor: "Cola",
    volume: "500ml"
  },
  {
    id: "berry-blast",
    title: "Berry Blast",
    price: "From £1.99 /can",
    img: HC5,
    hoverBg: BG5,
    description: "Burst of berries in every sip!",
    flavor: "Mixed Berries",
    volume: "330ml"
  },
  {
    id: "White Haze",
    title: "White Haze",
    price: "From £1.80 /can",
    img: HC6,
    hoverBg: BG6,
    description: "Sharp lemon flavor with a sparkling twist.",
    flavor: "Lemon",
    volume: "330ml"
  }
];

const OurDrinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-[#FFF8F0] px-6 md:px-12 py-16">
      <div className="max-w-[1440px] mx-auto border border-black rounded-2xl overflow-hidden">
        <h2 className="text-[48px] font-bold px-4 py-6 text-center font-[JoganSoft] border-b border-black">
          Our Drinks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x border-t border-black bg-white">
          {drinks.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="p-6 flex flex-col border-b-2 items-center gap-4 transition-all duration-300 ease-in-out "
              style={{
                backgroundImage:
                  hoveredIndex === index ? `url(${item.hoverBg})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="self-start">
                <span className="bg-black text-white text-sm px-2 py-1 font-semibold rounded">
                  {item.price}
                </span>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className={`w-[200px] object-contain transition-opacity duration-500 ease-in-out ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />

              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-black pt-4 mt-4">
                <span
                  className={`text-2xl font-bold font-[monster-energy] transition-colors duration-300 ${
                    hoveredIndex === index ? "text-[#FFF8F0]" : "text-black"
                  }`}
                >
                  {item.title}
                </span>

                <Link to={`/product/${item.id}`} className="relative group">
                  <button className="px-6 py-2 text-white text-sm font-semibold rounded-full overflow-hidden hover:text-[#95D600] bg-black z-10">
                    <span className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-3 font-[JoganSoft]">
                      SHOP NOW <span className="text-xl">→</span>
                    </span>
                    <span className="absolute inset-0 rounded-full animate-glow-border before:content-[''] before:absolute before:inset-[-2px] before:rounded-full before:bg-[conic-gradient(from_0deg,transparent,grey,transparent)] before:animate-spin-slow before:opacity-30 z-10"></span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurDrinks;

