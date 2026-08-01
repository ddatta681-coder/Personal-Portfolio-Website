import { Link } from 'react-router-dom';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-logo">Debarpan<em> </em>Datta</span>
          <p>Wildlife Photographer & Naturalist</p>
        </div>

        <nav className="footer-nav">          
          <a href="/#about">About</a>
          <a href="/#accolades">Accolades</a>
          <a href="/#portfolio">Gallery</a>
          <a href="/testimonials">Testimonials</a>
          <a href="/tours">Upcoming Tours</a>
          <a href="/#contact">Contact</a>
          {/* Add new page links here */}
        </nav>

        <div className="footer-social">
          <a href="https://www.instagram.com/debarpan_datta/" aria-label="Instagram">◇ Instagram</a>
          <a href=" https://www.facebook.com/anirudha.datta.5/" aria-label="500px"> ◇ Facebook</a>
          <a href="https://www.linkedin.com/in/debarpan-datta-9250a4200/" aria-label="LinkedIn">◇ LinkedIn</a>
        </div>

      </div>

      <div className="footer-bar">
        <p>© 2026 Debarpan Datta Photography. All rights reserved.</p>
        <p>Designed with intention. All images are the exclusive property of Debarpan Datta.</p>
      </div>
    </footer>
  );
}