import React from 'react';
// import MainRoute from './Routes/MainRoute';
// import Loading from './Loading';
import OurDrinks from './OurDrinks';
import LandingPage from './LandingPage';
import Hoverbar from './HoverBar';
import FlameInteractiveTrail from './FlameInteractiveTrail';
import StaggerCan from './StaggerCan';
import ImageSequence from './ImageSequence';
import MarqueeScrollComponent from '../Components/MarqueeScrollComponent';
import HoverImages from './HoverImages';
import Footer from './Footer';
import SmoothScroll from '../Components/SmoothScroll';
import QuoteSection from './QuoteSection';


const Home = () => (
  <SmoothScroll>
    {/* <MainRoute /> */}
    {/* <Loading/> */}
    <LandingPage/>
    <OurDrinks/>
    <QuoteSection/>
    <Hoverbar />
    <FlameInteractiveTrail/>
    <StaggerCan/>
    <ImageSequence />
    <MarqueeScrollComponent/>
    <HoverImages />
    <Footer />
  </SmoothScroll>
);

export default Home;



