import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import { GlobalTrade, Process } from './components/GlobalTrade';
import QualityStory from './components/QualityStory';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyUs />
        <GlobalTrade />
        <Process />
        <QualityStory />
        <Contact />
      </main>
      <Footer />
      <a
        className="whatsapp"
        href="https://wa.me/918903004756"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Skanda Traders on WhatsApp"
      >
        <span>WA</span>
        <b>Chat With Us</b>
      </a>
    </>
  );
}
