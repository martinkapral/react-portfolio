import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Refresh website to home
  useEffect(() => {
    const handleRefresh = () => {
      window.location.href = "/";
    };
    // Checking if the page is being loaded for the first time
    if (performance.navigation.type === 1) {
      handleRefresh();
    }
  }, []);

  return (
    <div className="app">
      <div className="background absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main className="main">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
