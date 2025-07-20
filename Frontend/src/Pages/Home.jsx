import React from 'react';
// import './index.css';
import Footer from './Footer';
// import MainRoute from './Routes/MainRoute';
// import Loading from './Pages/Loading';
import OurDrinks from './OurDrinks';
import StaggerCan from './StaggerCan';
import MarqueeScrollComponent from '../Components/MarqueeScrollComponent';
import ImageSequence from './ImageSequence';
import Hoverbar from './HoverBar';
import HoverImages from './HoverImages';
import LandingPage from './LandingPage';
import FlameInteractiveTrail from './FlameInteractiveTrail';
// import ShaderGallery from './Pages/ShaderGallery';
// import SmoothScroll from './Components/SmoothScroll';


const Home = () => (
  <div>
    {/* <MainRoute /> */}
    <LandingPage/>
    {/* <Loading/> */}
    <OurDrinks/>
    <Hoverbar />
    <FlameInteractiveTrail/>
    <StaggerCan/>
    <ImageSequence />
    <MarqueeScrollComponent/>
    <HoverImages />
    <Footer />
    {/* <ShaderGallery/> */}
  </div>
);

export default Home;




