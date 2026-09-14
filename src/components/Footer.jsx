import { HashLink } from 'react-router-hash-link';
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
          <a href="/#about">Home</a>
          <a href="/accolades">Accolades</a>
          <HashLink to="/#portfolio">Gallery</HashLink>
          <a href="/testimonials">Testimonials</a>
          <a href="/tours">Explore With Debarpan</a>
          <HashLink to="/#contact">Contact</HashLink>
          
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
        <p className='dev-mark'>
  Designed, Developed & Maintained by Rounak Chakraborti{' '}
  <a href='https://www.linkedin.com/in/rounak-chakraborti-profile/' target='_blank' rel='noopener noreferrer'>
    LinkedIn
  </a>{' '}
  |{' '}
  <a href='https://wa.me/918777402308' target='_blank' rel='noopener noreferrer'>
    Whatsapp
  </a>
</p>
      </div>
    </footer>
  );
}