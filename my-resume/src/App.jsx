// import Skills from "./components/Skills/Skills";
// import Header from "./components/Header/Header";
// import AboutME from "./components/AboutMe/AboutMe";
// import LazyLoad from "react-lazyload";
// import "./App.css";
// import Contact from "./components/Contact/Contact";

// export default function App() {
//   return (
//     <div className="app">

//      <Header/>
//      <AboutME />
//      <Skills />
//      <Contact />
     
//     </div>
//   );
// }

import React, { Suspense } from 'react';
import LazyLoad from 'react-lazyload';

// Wrap components in Suspense with LazyLoad for dynamic loading
const LazySkills = React.lazy(() => import('./components/Skills/Skills'));
const LazyHeader = React.lazy(() => import('./components/Header/Header'));
const LazyAboutMe = React.lazy(() => import('./components/AboutMe/AboutMe'));
const LazyContact = React.lazy(() => import('./components/Contact/Contact'));

export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader />
        <LazyAboutMe />
        <LazySkills />
        <LazyContact />
      </Suspense>
    </div>
  );
}

