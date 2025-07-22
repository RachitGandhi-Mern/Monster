import React from "react";
import Navbar from "../Components/Navbar";
import Me from "../assets/Images/RachitGandhi.PNG"

const ProfileCard = () => {
  return (
    <div className="w-full min-h-screen bg-[#83af9b] relative font-['Space_Mono']">
      <Navbar />

      <div className="w-[350px] bg-[#FFF8F0] border-[4px] border-black shadow-[8px_8px_0_#000] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Upper Container */}
        <div className="h-[140px] bg-[#f9cdad] border-b-[4px] border-black flex justify-center items-end">
          <div className="w-[100px] h-[100px] bg-[#FFF8F0] border-[4px] border-black translate-y-1/2 flex justify-center items-center ">
            <img
              src={Me}
              alt="profile"
              className="w-[90px] h-[90px]  object-cover border-[2px] border-black"
            />
          </div>
        </div>

        {/* Lower Container */}
        <div className="pt-[60px] pb-[30px] px-5 text-center">
          <div>
            <h3 className="text-[20px] font-bold text-black m-0">Rachit Gandhi</h3>
            <h4 className="text-[14px] text-[#333] mt-[5px] mb-[15px] font-normal">
              Front-end Developer
            </h4>
          </div>
          <div>
            <p className="text-[14px] text-black border-[2px] border-dashed border-black p-[10px] bg-[#f0f0f0] mb-[20px]">
              Frontend Developer skilled in React, Redux, JavaScript, Tailwind CSS, GSAP, and Framer Motion. I craft responsive, high-performance interfaces with a strong focus on UI/UX. Known for hitting the ground running, I thrive in fast-paced teams and deliver scalable, production-ready solutions.
            </p>
          </div>
          <div className="flex justify-around px-6">
            <a
              href="https://github.com/RachitGandhi-Mern"
              target="blank"
              className="inline-block px-5 py-2.5 bg-[#ff006e] text-white font-bold border-[3px] border-black shadow-[4px_4px_0_#000] transition-all duration-200 hover:bg-white hover:text-[#ff006e] hover:border-[#ff006e] hover:shadow-none"
            >
              Github 
            </a>

            <a
              href="https://www.linkedin.com/in/rachit-gandhi-33223531a/"
              target="blank"
              className="inline-block px-5 py-2.5 bg-[#ff006e] text-white font-bold border-[3px] border-black shadow-[4px_4px_0_#000] transition-all duration-200 hover:bg-white hover:text-[#ff006e] hover:border-[#ff006e] hover:shadow-none"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
