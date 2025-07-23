// import React from 'react';
// import Navbar from '../Components/Navbar';
// import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

// const About = () => {
//   return (
//     <article className="grid grid-cols-5 min-w-full mx-auto bg-[#83af9b]">
//       <Navbar />

//       {/* Header */}
//       <header className="col-span-5 flex justify-between items-center px-5 py-4 border-b border-gray-200">
//         <h1 className="text-xs uppercase font-bold tracking-widest">ENERGY CULTURE MONTHLY</h1>
//         <p className="text-xs text-gray-800">SUMMER 2025 • ISSUE 12</p>
//       </header>

//       {/* Main Content */}
//       <main className="col-span-3 p-10">
//         <header>
//           <h2 className="text-5xl uppercase font-extrabold mb-5">Monster Energy: Fueling a Global Obsession</h2>
//           <p className="text-lg text-black mb-6 leading-relaxed">
//             From extreme sports circuits to gaming battlestations, Monster Energy isn't just a drink—it's an icon of intensity, rebellion, and identity.
//           </p>
//           <address className="text-sm italic text-black mb-6 not-italic">By Jamie Cross • Images courtesy of Monster Beverage Corp.</address>
//         </header>

//         <figure className="relative mb-8">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Monster_Beverage_Headquarters.jpg/500px-Monster_Beverage_Headquarters.jpg"
//             alt="Monster Energy can on a motocross bike tank"
//             className="w-full h-auto"
//           />
//           <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply" aria-hidden="true"></div>
//           <figcaption className="text-xs text-black italic mt-2">
//             Monster can spotted in its natural habitat—mid-adrenaline.
//           </figcaption>
//         </figure>

//         <section className="columns-2 gap-8 text-base leading-relaxed text-gray-800">
//           <p className="mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
//             Launched in 2002 by Monster Beverage Corp., Monster Energy clawed its way into a market dominated by Red Bull. Its aggressive branding, bold flavors, and deep roots in alternative culture helped it earn over 30% of the U.S. energy drink market.
//           </p>
//           <p className="mb-4">
//             Backed by Coca-Cola's strategic investment in 2015, Monster expanded rapidly, with over 150 flavor variants globally and a marketing empire built on action sports, music, and gaming.
//           </p>
//           <p className="mb-4">
//             Rather than traditional endorsements, Monster embedded itself directly in youth subcultures—whether through sponsoring MMA fighters or collaborating with esports streamers.
//           </p>

//           <blockquote className="col-span-full my-10 py-8 text-3xl text-center font-light border-y-2 border-green-500 font-['Roboto_Condensed'] tracking-tight">
//             <p>"Unleash the Beast."</p>
//             <cite className="block mt-4 text-base uppercase tracking-wider text-gray-700">— Monster Motto</cite>
//           </blockquote>

          
// <div className='flex gap-2'>
//   <a href='https://www.facebook.com/MonsterEnergy/'  target='blank' className="flex items-center gap-1 ">
//     <Linkedin size={16} />
//     <span className='hover:text-white'>Facebook</span>
//   </a>
//   <a href='https://www.instagram.com/monsterenergy/' target='blank' className="flex items-center gap-1">
//     <Instagram size={16} />
//     <span className='hover:text-white'>Instagram</span>
//   </a>
//   <a href='https://twitter.com/monsterenergy' target='blank'  className="flex items-center gap-1">
//     <Twitter size={16} />
//     <span className='hover:text-white'>Twitter</span>
//   </a>
//   <a href='https://www.youtube.com/monsterenergy' target='blank' className="flex items-center gap-1">
//     <Mail size={16} />
//     <span className='hover:text-white'>Youtube</span>
//   </a>
// </div>

//           <p className="mb-4">
//             Its claw-logo and matte black cans have become cultural markers—from motocross pits to concert mosh pits. Monster didn't just sell energy—it sold a lifestyle.
//           </p>
//           <p className="mb-4">
//             With marketing designed to stoke adrenaline and authenticity, Monster has built a loyal following across continents and platforms.
//           </p>

//           <section>
//             <h3 className="text-green-600 font-bold mt-6 mb-3 text-lg uppercase">Beyond the Can</h3>
//             <p className="mb-4">
//               Monster’s influence transcends beverages. It has sponsored UFC bouts, rally cars, F1 helmets, and hosted music stages—all while embedding itself into digital culture via influencers and live events.
//             </p>
//             <p className="mb-4">
//               Its approach? Stay where energy lives: on ramps, tracks, stages, and streams.
//             </p>
//           </section>

//           <section>
//             <h3 className="text-green-600 font-bold mt-6 mb-3 text-lg uppercase">The Business of Hype</h3>
//             <p className="mb-4">
//               With 2024 revenue exceeding $7.5 billion, Monster’s formula of bold design, counterculture marketing, and community alignment continues to drive sales. Recent ventures include alcoholic lines like Beast Unleashed and Nasty Beast, proving the brand's evolving identity.
//             </p>
//           </section>
//         </section>
//       </main>

//       {/* Sidebar */}
//       <aside className="col-span-2 bg-black text-white p-10 relative flex flex-col">
//         <div className="absolute top-0 right-0 w-36 h-36 bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:15px_15px] opacity-20"></div>
//         <h2 className="text-xl uppercase font-bold border-b-2 border-white pb-2 mb-6">The Monster Timeline</h2>

//         <section className="mb-8 flex-grow">
//           {[
//             { year: '2002', text: 'Monster Energy debuts in California.' },
//             { year: '2005', text: 'Enters motocross and Supercross circuits.' },
//             { year: '2012', text: 'Rebrands company as Monster Beverage Corp and expands globally.' },
//             { year: '2015', text: 'Coca-Cola acquires a 16.7% stake in Monster.' },
//             { year: '2018', text: 'Sponsors F1 driver Lewis Hamilton and expands racing footprint.' },
//             { year: '2023', text: 'Launches “Beast Unleashed,” a hard seltzer-style alcoholic drink.' },
//           ].map(({ year, text }) => (
//             <article key={year} className="relative pl-5 mb-6 border-l border-white/30">
//               <div className="absolute top-1 left-[-6px] w-2.5 h-2.5 bg-green-500 rounded-full"></div>
//               <h4 className="font-bold text-lg">{year}</h4>
//               <p>{text}</p>
//             </article>
//           ))}
//         </section>

//         <section className="grid grid-cols-2 grid-rows-2 gap-2 mb-8">
//           {[
//             { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vegas_monorail_2007_with_advertisement_of_%22Monster_energy%22_drink_%28cropped%29.jpg/500px-Vegas_monorail_2007_with_advertisement_of_%22Monster_energy%22_drink_%28cropped%29.jpg', color: 'bg-green-500/50' },
//             { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kurt_Busch_45_Sonoma_2022.jpg/500px-Kurt_Busch_45_Sonoma_2022.jpg', color: 'bg-yellow-400/50' },
//             { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MWRTtest.jpg/500px-MWRTtest.jpg', color: 'bg-red-500/50' },
//             { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/City-Race-Rdam-2013-DSC_0207.jpg/500px-City-Race-Rdam-2013-DSC_0207.jpg', color: 'bg-blue-500/50' },
//           ].map(({ img, color }, idx) => (
//             <figure key={idx} className="aspect-square relative overflow-hidden">
//               <img src={img} alt="Monster culture" className="w-full h-full object-cover" />
//               <div className={`absolute inset-0 ${color} mix-blend-multiply`} aria-hidden="true"></div>
//             </figure>
//           ))}
//         </section>

//         <section>
//           <h3 className="text-white text-lg font-bold uppercase mb-4">Key Drops</h3>
//           {[
//             {
//               title: 'Monster Original (2002)',
//               text: 'The flagship black-and-green can that launched a movement.',
//             },
//             {
//               title: 'Ultra Zero (2010)',
//               text: 'A zero-sugar, calorie-free alternative that broadened the brand’s base.',
//             },
//             {
//               title: 'The Doctor – VR46 (2015)',
//               text: 'A citrus-infused tribute to MotoGP icon Valentino Rossi.',
//             },
//             {
//               title: 'Beast Unleashed (2023)',
//               text: 'Monster enters the alcoholic energy space with a 6% ABV line.',
//             },
//           ].map(({ title, text }) => (
//             <article key={title} className="border-b border-white/30 pb-4 mb-4 last:border-none last:pb-0 last:mb-0">
//               <h4 className="font-bold">{title}</h4>
//               <p>{text}</p>
//             </article>
//           ))}
//         </section>
//       </aside>
//     </article>
//   );
// };

// export default About;


import React from 'react';
import Navbar from '../Components/Navbar';
import { Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const About = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-5 min-w-full mx-auto bg-[#83af9b]">
      <Navbar />

      {/* Header */}
      <header className="col-span-full flex flex-col md:flex-row justify-between items-center px-4 md:px-5 py-4 border-b border-gray-200 text-center md:text-left gap-2">
        <h1 className="text-xs uppercase font-bold tracking-widest">ENERGY CULTURE MONTHLY</h1>
        <p className="text-xs text-gray-800">SUMMER 2025 • ISSUE 12</p>
      </header>

      {/* Main Content */}
      <main className="md:col-span-3 p-4 sm:p-6 md:p-10">
        <header>
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold mb-5">
            Monster Energy: Fueling a Global Obsession
          </h2>
          <p className="text-base md:text-lg text-black mb-6 leading-relaxed">
            From extreme sports circuits to gaming battlestations, Monster Energy isn't just a drink—it's an icon of intensity, rebellion, and identity.
          </p>
          <address className="text-sm italic text-black mb-6 not-italic">
            By Jamie Cross • Images courtesy of Monster Beverage Corp.
          </address>
        </header>

        <figure className="relative mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Monster_Beverage_Headquarters.jpg/500px-Monster_Beverage_Headquarters.jpg"
            alt="Monster Energy headquarters"
            className="w-full h-auto rounded"
          />
          <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply" aria-hidden="true"></div>
          <figcaption className="text-xs text-black italic mt-2">
            Monster can spotted in its natural habitat—mid-adrenaline.
          </figcaption>
        </figure>

        <section className="columns-1 sm:columns-2 gap-8 text-base leading-relaxed text-gray-800">
          <p className="mb-4 first-letter:text-4xl md:first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:leading-none first-letter:mr-2">
            Launched in 2002 by Monster Beverage Corp., Monster Energy clawed its way into a market dominated by Red Bull. Its aggressive branding, bold flavors, and deep roots in alternative culture helped it earn over 30% of the U.S. energy drink market.
          </p>
          <p className="mb-4">
            Backed by Coca-Cola's strategic investment in 2015, Monster expanded rapidly, with over 150 flavor variants globally and a marketing empire built on action sports, music, and gaming.
          </p>
          <p className="mb-4">
            Rather than traditional endorsements, Monster embedded itself directly in youth subcultures—whether through sponsoring MMA fighters or collaborating with esports streamers.
          </p>

          <blockquote className="col-span-full my-10 py-8 text-2xl sm:text-3xl text-center font-light border-y-2 border-green-500 font-['Roboto_Condensed'] tracking-tight">
            <p>"Unleash the Beast."</p>
            <cite className="block mt-4 text-base uppercase tracking-wider text-gray-700">— Monster Motto</cite>
          </blockquote>

          <div className='flex flex-wrap gap-3 mb-6'>
            <a href='https://www.facebook.com/MonsterEnergy/' target='blank' className="flex items-center gap-1">
              <Linkedin size={16} />
              <span className='hover:text-white'>Facebook</span>
            </a>
            <a href='https://www.instagram.com/monsterenergy/' target='blank' className="flex items-center gap-1">
              <Instagram size={16} />
              <span className='hover:text-white'>Instagram</span>
            </a>
            <a href='https://twitter.com/monsterenergy' target='blank' className="flex items-center gap-1">
              <Twitter size={16} />
              <span className='hover:text-white'>Twitter</span>
            </a>
            <a href='https://www.youtube.com/monsterenergy' target='blank' className="flex items-center gap-1">
              <Mail size={16} />
              <span className='hover:text-white'>Youtube</span>
            </a>
          </div>

          <p className="mb-4">
            Its claw-logo and matte black cans have become cultural markers—from motocross pits to concert mosh pits. Monster didn't just sell energy—it sold a lifestyle.
          </p>
          <p className="mb-4">
            With marketing designed to stoke adrenaline and authenticity, Monster has built a loyal following across continents and platforms.
          </p>

          <section>
            <h3 className="text-green-600 font-bold mt-6 mb-3 text-lg uppercase">Beyond the Can</h3>
            <p className="mb-4">
              Monster’s influence transcends beverages. It has sponsored UFC bouts, rally cars, F1 helmets, and hosted music stages—all while embedding itself into digital culture via influencers and live events.
            </p>
            <p className="mb-4">
              Its approach? Stay where energy lives: on ramps, tracks, stages, and streams.
            </p>
          </section>

          <section>
            <h3 className="text-green-600 font-bold mt-6 mb-3 text-lg uppercase">The Business of Hype</h3>
            <p className="mb-4">
              With 2024 revenue exceeding $7.5 billion, Monster’s formula of bold design, counterculture marketing, and community alignment continues to drive sales. Recent ventures include alcoholic lines like Beast Unleashed and Nasty Beast, proving the brand's evolving identity.
            </p>
          </section>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="md:col-span-2 bg-black text-white p-6 sm:p-8 md:p-10 relative flex flex-col">
        <div className="absolute top-0 right-0 w-24 sm:w-36 h-24 sm:h-36 bg-[radial-gradient(circle,_white_2px,_transparent_2px)] bg-[length:15px_15px] opacity-20"></div>
        <h2 className="text-xl uppercase font-bold border-b-2 border-white pb-2 mb-6">The Monster Timeline</h2>

        <section className="mb-8 flex-grow">
          {[
            { year: '2002', text: 'Monster Energy debuts in California.' },
            { year: '2005', text: 'Enters motocross and Supercross circuits.' },
            { year: '2012', text: 'Rebrands company as Monster Beverage Corp and expands globally.' },
            { year: '2015', text: 'Coca-Cola acquires a 16.7% stake in Monster.' },
            { year: '2018', text: 'Sponsors F1 driver Lewis Hamilton and expands racing footprint.' },
            { year: '2023', text: 'Launches “Beast Unleashed,” a hard seltzer-style alcoholic drink.' },
          ].map(({ year, text }) => (
            <article key={year} className="relative pl-5 mb-6 border-l border-white/30">
              <div className="absolute top-1 left-[-6px] w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <h4 className="font-bold text-lg">{year}</h4>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-2 gap-2 mb-8">
          {[
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vegas_monorail_2007_with_advertisement_of_%22Monster_energy%22_drink_%28cropped%29.jpg/500px-Vegas_monorail_2007_with_advertisement_of_%22Monster_energy%22_drink_%28cropped%29.jpg', color: 'bg-green-500/50' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Kurt_Busch_45_Sonoma_2022.jpg/500px-Kurt_Busch_45_Sonoma_2022.jpg', color: 'bg-yellow-400/50' },
                        { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/MWRTtest.jpg/500px-MWRTtest.jpg', color: 'bg-red-500/50' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/City-Race-Rdam-2013-DSC_0207.jpg/500px-City-Race-Rdam-2013-DSC_0207.jpg', color: 'bg-blue-500/50' },
          ].map(({ img, color }, idx) => (
            <figure key={idx} className="aspect-square relative overflow-hidden">
              <img src={img} alt="Monster culture" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${color} mix-blend-multiply`} aria-hidden="true"></div>
            </figure>
          ))}
        </section>

        <section>
          <h3 className="text-white text-lg font-bold uppercase mb-4">Key Drops</h3>
          {[
            {
              title: 'Monster Original (2002)',
              text: 'The flagship black-and-green can that launched a movement.',
            },
            {
              title: 'Ultra Zero (2010)',
              text: 'A zero-sugar, calorie-free alternative that broadened the brand’s base.',
            },
            {
              title: 'The Doctor – VR46 (2015)',
              text: 'A citrus-infused tribute to MotoGP icon Valentino Rossi.',
            },
            {
              title: 'Beast Unleashed (2023)',
              text: 'Monster enters the alcoholic energy space with a 6% ABV line.',
            },
          ].map(({ title, text }) => (
            <article key={title} className="border-b border-white/30 pb-4 mb-4 last:border-none last:pb-0 last:mb-0">
              <h4 className="font-bold">{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </aside>
    </article>
  );
};

export default About;

