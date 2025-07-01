import { About } from "./components/About";

import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";

import { Navbar } from "./components/Navbar";


import { ScrollToTop } from "./components/ScrollToTop";


import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Features />




      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
