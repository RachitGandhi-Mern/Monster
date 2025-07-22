import '../../Styles/AnimatedButton.css'; // Import the custom CSS

export default function AnimatedButton() {
  return (
    <button className="relative px-8 py-4 text-white text-base font-medium rounded-full overflow-clip bg-black isolate hover:after:opacity-100 glow-button">
      Shop Now
      <span className="before-layer"></span>
      <span className="after-layer"></span>
    </button>
  );
}



// import { Link } from "react-router-dom";
// import './AnimatedButton.css'; // Custom CSS

// export default function AnimatedButton({ to, text = "Shop Now" }) {
//   return (
//     <Link to={to} className="group">
//       <button className="relative px-4 py-1 text-white text-base font-medium rounded-full overflow-clip bg-black isolate hover:after:opacity-100 glow-button font-[monster-energy]">
//         {text}
//         <span className="before-layer"></span>
//         <span className="after-layer"></span>
//       </button>
//     </Link>
//   );
// }

                // <AnimatedButton to={`/product/${item.id}`} text="SHOP NOW" />


