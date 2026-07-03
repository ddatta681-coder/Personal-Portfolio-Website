import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';

// ── To add a nav link: add an entry to this array ──
const navItems = [
  { label: 'About',          href: '/#about' },
  { label: 'Accolades',      href: '/accolades', isPage: true },  
  { label: 'Testimonials',   href: '/testimonials', isPage: true },
  { label: 'Upcoming Tours', href: '/#tours' },
  { label: 'Contact',        href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        Debarpan<span> </span>Datta
      </Link>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navItems.map(({ label, href, isPage }) =>
          isPage ? (
            <Link key={label} to={href} onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ) : (
            <HashLink 
              smooth 
              key={label} 
              to={href} 
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </HashLink>
          )
        )}
      </nav>
    </header>
  );
}
