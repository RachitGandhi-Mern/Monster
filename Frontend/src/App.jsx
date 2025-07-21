
// ! Without Loader

// import React from 'react'
// import Home from './Pages/Home'
// import './index.css';
// import MainRoute from './Routes/MainRoute';
// import About from './Pages/About';

// const App = () => {
//   return (
//     <div>
//       <MainRoute/>
//     </div>
//   )
// }

// export default App










// //! With Loader
import React from 'react'
// import Home from './Pages/Home'
import './index.css';
import MainRoute from './Routes/MainRoute';
import About from './Pages/About';
import Loading from './Pages/Loading';



const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loading onLoadingComplete={handleLoadingComplete} />
      ) : (
        <MainRoute /> 
      )}
    </>
  );
};
export default App