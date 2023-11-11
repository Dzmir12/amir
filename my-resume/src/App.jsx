import Skills from "./components/Skills/Skills";
import Header from "./components/Header/Header";
import AboutME from "./components/AboutMe/AboutMe";
import LazyLoad from "react-lazyload";
import "./App.css";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="app">

     <Header/>
     <AboutME />
     <Skills />
     <Contact />
     
    </div>
  );
}



