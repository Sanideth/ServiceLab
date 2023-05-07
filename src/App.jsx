import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import How from "./components/How";
import Contact from "./components/Contact";

function App() {
  console.log("here will be upscroll code development git test)");
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Hero />
      <How />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
