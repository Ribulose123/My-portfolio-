
import { ThemeProvider } from "./context/theme.jsx";
;
import Navbar from '../src/components/Navbar.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="">
          <Navbar/> 
          <Hero/>
          <About/>
          <Experience/>
      </div>
    </ThemeProvider>
  )
}

export default App
