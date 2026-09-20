import { useEffect, useState } from 'react';
import logo from '../assets/skanda-traders-logo.jpg';

const links = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Products', 'products'],
  ['Global Trade', 'global-trade'],
  ['Process', 'process'],
  ['Contact', 'contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-lock', open);
    return () => document.body.classList.remove('menu-lock');
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container nav-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Skanda Traders home">
          <img src={logo} alt="Skanda Traders logo" />
          <span>
            SKANDA <b>TRADERS</b>
            <small>PUDUCHERRY, INDIA</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="menu-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <nav id="site-navigation" className={open ? 'nav-links show' : 'nav-links'} aria-label="Primary navigation">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="gold-button small-button" href="#contact" onClick={closeMenu}>
            Enquire Now
          </a>
        </nav>
      </div>
    </header>
  );
}
