import React, { useEffect } from "react";

const textBlocks = [
  "There’s lots of ways to live like a beast.",
"Some unleash their energy in different ways.",
"But one way the real ones show who they are..." ,
"is by creating something raw, wild, and powerful",
"And putting it out into the world  no filters." ,
"You might never meet the people who vibe with it",
"No handshakes. No small talk." ,
"Just pure adrenaline, pure energy " ,
"poured straight from your soul into a can." ,
"Because when you create with intensity," ,
"when you live loud, with love and fire," ,
"something real gets passed on." ,
"It’s more than a drink. ",
"It’s a statement. ",
"A pulse. A roar. A reminder — ",
"to stay true to your grind, ",
"and never forget what fuels you. ",
<span className="text-[#95D600] font-[monster-energy] text-8xl">" Monster <span className="text-white">Energy</span> "</span> ,
<span className="text-orange-500">" Unleash the Beast. ⚡️"</span>,
];

const QuoteSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textDivs = document.querySelectorAll(".textDiv");
      const viewportHeight = window.innerHeight;
      const quarterHeight = viewportHeight / 4;

      textDivs.forEach((div) => {
        const rect = div.getBoundingClientRect();
        const divCenterY = rect.top + rect.height / 2;

        const distanceFromCenter = Math.abs(divCenterY - viewportHeight / 2);

        let opacity;
        let weight;
        let size;

        if (divCenterY < quarterHeight) {
          opacity = divCenterY / quarterHeight;
        } else if (divCenterY > viewportHeight - quarterHeight) {
          opacity = (viewportHeight - divCenterY) / quarterHeight;
          weight = (viewportHeight - divCenterY) / quarterHeight;
        } else {
          opacity = 1;
          weight = 100;
        }

        opacity = Math.max(0, Math.min(1, opacity));
        weight = opacity * 900;
        size = opacity + 3;

        div.style.opacity = opacity;
        div.style.fontWeight = weight;
        div.style.fontSize = `${size}vw`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.dispatchEvent(new Event("scroll"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full py-[21vw] text-white font-[helaticav] text-center">
      {textBlocks.map((text, index) =>
        text === "" ? (
          <br key={index} />
        ) : (
          <div
            key={index}
            className="textDiv px-[7vw] text-[4vmax] whitespace-nowrap transition-transform  duration-150 ease-in-out cursor-default hover:scale-[1.02] select-text"
          >
            {text}
          </div>
        )
      )}
    </div>
  );
};

export default QuoteSection;
