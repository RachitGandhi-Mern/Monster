import React from "react";
import confetti from "canvas-confetti";

const NewsletterForm = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#95D600", "#FFF8F0", "#ffffff"],
    });
  };

  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <h2 className="text-lg font-semibold">Get up to 25% off</h2>
      <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
      <div className="flex items-center border border-white rounded overflow-hidden font-[JoganSoft]">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="bg-black text-[#95D600] px-4 py-2 flex-1 placeholder:text-gray-400 focus:outline-none font-[]"
        />
        <button
          onClick={handleClick}
          className="bg-[#FFF8F0] text-black px-4 py-2 uppercase text-sm 
            hover:bg-[#95D600] hover:text-white transition-all 
            active:scale-95 duration-150"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterForm;