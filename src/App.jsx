
import { ThemeProvider } from "./context/theme.jsx";
;
import Navbar from '../src/components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Tech from "./components/Tech.jsx";
import Works from "./components/Works.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="">
          <Navbar/> 
          <Hero/>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
      </div>
    </ThemeProvider>
  )
}

export default App
