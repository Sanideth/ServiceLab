import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import How from './components/How';
import Contact from './components/Contact';
import ArrowUp from './components/ArrowUp';

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <ArrowUp />
      <Hero />
      <How />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
