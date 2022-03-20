
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
