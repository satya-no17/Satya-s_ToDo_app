import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Mainc from "./components/Mainc";
import Footer from "./components/Footer";
import Aboutp from "./components/Aboutp";
function App() {
  const [count, setCount] = useState(0);
  const [Mode, setMode] = useState(false);
  const [About, setAbout] = useState(false);
  const OAbout = ()=>{
    setAbout(true)
  }
  const OHome =()=>{
    setAbout(false)
  }
  const changemode = () => {
    setMode(!Mode);
    console.log(Mode)
  };
  return (
    <>
      <Navbar changemode={changemode} Mode={Mode} OAbout={OAbout} OHome={OHome}/>
     {About? <Aboutp Mode={Mode}/>:  <Mainc Mode={Mode}/>}
      <Footer Mode={Mode}/>
     </>
   

  );
}

export default App;
