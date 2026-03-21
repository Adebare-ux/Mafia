import "./global.css";

import useScrollReveal from "./hooks/useScrollReveal";

import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Africa from "./components/Africa";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useScrollReveal();

  return (
    <>
      <div className="noise" />
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Work />
      <Results />
      <Testimonials />
      <Africa />
      <Contact />
      <Footer />
    </>
  );
}
