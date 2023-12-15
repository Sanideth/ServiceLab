import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Hero from '../../components/Hero';
import How from '../../components/How';
import Cards from '../../components/Cards';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Home() {
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
