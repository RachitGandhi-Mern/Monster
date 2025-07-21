//! Code With without Liquid Button
// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import gsap from "gsap";
// import { motion } from "framer-motion";
// import HC1 from "../assets/images/HC1.png";
// import HC2 from "../assets/images/HC2.png";
// import HC3 from "../assets/images/HC3.png";
// import LiquidButton from "../Components/Ui/LiquidButton";

// const drinks = {
//   "energy-ultra": {
//     title: "Energy Ultra",
//     price: "£1.87",
//     img: HC1,
//     description: "Boost your energy instantly with our Energy Ultra drink.",
//     flavor: "Citrus",
//     volume: "500ml"
//   },
//   "session-ipa": {
//     title: "SESSION IPA",
//     price: "£1.87",
//     img: HC2,
//     description: "Smooth and crisp IPA with a hoppy finish.",
//     flavor: "Hop",
//     volume: "330ml"
//   },
//   mixed: {
//     title: "MIXED",
//     price: "£1.87",
//     img: HC3,
//     description: "A mix pack of all our favorite flavors.",
//     flavor: "Variety",
//     volume: "6 Pack"
//   },
//   "classic-cola": {
//     title: "Classic Cola",
//     price: "£1.75",
//     img: HC1,
//     description: "Timeless cola taste with real sugar.",
//     flavor: "Cola",
//     volume: "500ml"
//   },
//   "berry-blast": {
//     title: "Berry Blast",
//     price: "£1.99",
//     img: HC2,
//     description: "Burst of berries in every sip!",
//     flavor: "Mixed Berries",
//     volume: "330ml"
//   },
//   "lemon-zing": {
//     title: "Lemon Zing",
//     price: "£1.80",
//     img: HC3,
//     description: "Sharp lemon flavor with a sparkling twist.",
//     flavor: "Lemon",
//     volume: "330ml"
//   }
// };

// const ProductPage = () => {
//   const { id } = useParams();
//   const product = drinks[id];
//   const imgRef = useRef();

//   useEffect(() => {
//     if (imgRef.current) {
//       gsap.fromTo(
//         imgRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//       );
//     }
//   }, []);

//   if (!product) return <div className="p-10">Product not found.</div>;

//   return (
//     <motion.div
//       className="min-h-screen bg-[#FFF8F0] px-6 md:px-20 py-20"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <img
//             ref={imgRef}
//             src={product.img}
//             alt={product.title}
//             className="w-full max-w-[300px] mx-auto"
//           />
//         </div>

//         <div className="space-y-6">
//           <h1 className="text-4xl font-bold font-[JoganSoft]">
//             {product.title}
//           </h1>
//           <p className="text-lg text-gray-700">{product.description}</p>
//           <ul className="text-md text-gray-600 list-disc list-inside">
//             <li>Flavor: {product.flavor}</li>
//             <li>Volume: {product.volume}</li>
//             <li>Price: {product.price}</li>
//           </ul>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => alert(`${product.title} added to cart!`)}
//             className="mt-4 px-8 py-3 bg-black text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 transition"
//           >
//             Add to Cart
//           </motion.button>
//            </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductPage;









//! Code With Liquid And diff UI/STYLING
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { motion } from "framer-motion";
import HC1 from "../assets/Images/HC1.png";
import HC2 from "../assets/Images/HC2.png";
import HC3 from "../assets/Images/HC3.png";
import HC4 from "../assets/Images/HC4.png";
import HC5 from "../assets/Images/HC5.png";
import HC6 from "../assets/Images/HC6.png";
import LiquidButton from "../Components/Ui/LiquidButton";

const drinks = {
  "energy-ultra": {
    title: "Energy Ultra",
    price: "£1.87",
    img: HC1,
    description: "Boost your energy instantly with our Energy Ultra drink.",
    flavor: "Citrus",
    volume: "500ml"
  },
  "session-ipa": {
    title: "SESSION IPA",
    price: "£1.87",
    img: HC2,
    description: "Smooth and crisp IPA with a hoppy finish.",
    flavor: "Hop",
    volume: "330ml"
  },
  mixed: {
    title: "MIXED",
    price: "£1.87",
    img: HC3,
    description: "A mix pack of all our favorite flavors.",
    flavor: "Variety",
    volume: "6 Pack"
  },
  "classic-cola": {
    title: "Classic Cola",
    price: "£1.75",
    img: HC4,
    description: "Timeless cola taste with real sugar.",
    flavor: "Cola",
    volume: "500ml"
  },
  "berry-blast": {
    title: "Berry Blast",
    price: "£1.99",
    img: HC5,
    description: "Burst of berries in every sip!",
    flavor: "Mixed Berries",
    volume: "330ml"
  },
  "White Haze": {
    title: "White Haze",
    price: "£1.80",
    img: HC6,
    description: "Sharp lemon flavor with a sparkling twist.",
    flavor: "Lemon",
    volume: "330ml"
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const product = drinks[id];
  const imgRef = useRef();

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  if (!product) return <div className="p-10">Product not found.</div>;

  return (
    <motion.div
      className="min-h-screen bg-[#FFF8F0] px-6 md:px-20 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            ref={imgRef}
            src={product.img}
            alt={product.title}
            className="w-full max-w-[300px] mx-auto"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-[JoganSoft]">
            {product.title}
          </h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <ul className="text-md text-gray-600 list-disc list-inside">
            <li>Flavor: {product.flavor}</li>
            <li>Volume: {product.volume}</li>
            <li>Price: {product.price}</li>
          </ul>

          <div
            className="mt-4 inline-block cursor-pointer"
            onClick={handleAddToCart}
          >
            <LiquidButton />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductPage;



