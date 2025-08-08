import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";
import gsap from "gsap";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  const containerRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.95, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power2.out" }
    );
  }, [location]);

  return (
    <div ref={containerRef}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black text-white">
        <NavBar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;