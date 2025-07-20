import React from 'react';
// import './index.css';
import Footer from './Footer';
// import MainRoute from './Routes/MainRoute';
// import Loading from './Loading';
import OurDrinks from './OurDrinks';
import StaggerCan from './StaggerCan';
import MarqueeScrollComponent from '../Components/MarqueeScrollComponent';
import ImageSequence from './ImageSequence';
import Hoverbar from './HoverBar';
import HoverImages from './HoverImages';
import LandingPage from './LandingPage';
import FlameInteractiveTrail from './FlameInteractiveTrail';
// import ShaderGallery from './Pages/ShaderGallery';
import SmoothScroll from '../Components/SmoothScroll';


const Home = () => (
  <SmoothScroll>
    {/* <MainRoute /> */}
    {/* <Loading/> */}
    <LandingPage/>
    <OurDrinks/>
    <Hoverbar />
    <FlameInteractiveTrail/>
    <StaggerCan/>
    <ImageSequence />
    <MarqueeScrollComponent/>
    <HoverImages />
    <Footer />
    {/* <ShaderGallery/> */}
  </SmoothScroll>
);

export default Home;



