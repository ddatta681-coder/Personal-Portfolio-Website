import { useState, useEffect, useRef } from 'react';
import './styles/HeroSlider.css';

const slides = [
  {
    deskImg: '/static/assets/desktop/HeroSection/hero5.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero5.jpg',
    desktopCaption: '05 / Bengal Tiger',
    mobileCaption:  'Bengal Tiger',
  },
  {
    deskImg: '/static/assets/desktop/HeroSection/hero1.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero1.jpg',
    desktopCaption: '01 / Asiatic Elephants',
    mobileCaption:  'Purple Heron',
  },
  {
    deskImg: '/static/assets/desktop/HeroSection/hero2.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero2.jpg',
    desktopCaption: '02 / Indian Leopard',
    mobileCaption:  'Red-crested Pochard',
  },
  {
    deskImg: '/static/assets/desktop/HeroSection/hero3.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero3.jpg',
    desktopCaption: '03 / Red-crested Pochard',
    mobileCaption:  'Pheasant-tailed Jacana',
  },
  {
    deskImg: '/static/assets/desktop/HeroSection/hero4.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero4.jpg',
    desktopCaption: '04 / Jungle Cat',
    mobileCaption:  'Himalayan Marmot',
  },
  
  {
    deskImg: '/static/assets/desktop/HeroSection/hero6.jpeg',
    mobImg:  '/static/assets/mobile/HeroSection/hero5.jpg',
    desktopCaption: '05 / Bengal Tiger Cubs',
    mobileCaption:  'Bengal Tiger',
  },

];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (n) => {
    setCurrent((n + slides.length) % slides.length);
  };

  const resetAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent(c => (c + 1) % slides.length),
      5000
    );
  };

  useEffect(() => {
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="hero" id="home">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide${i === current ? ' active' : ''}`}
            style={{
              '--bg-desk': `url(${slide.deskImg})`,
              '--bg-mob':  `url(${slide.mobImg})`,
            }}
          >
            <div className="slide-caption">
              <span className="desktop-only">
                <span>{slide.desktopCaption.split(' / ')[0]} /</span>{' '}
                {slide.desktopCaption.split(' / ')[1]}
              </span>
              <span className="mobile-only">{slide.mobileCaption}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-btn prev"
        onClick={() => { goTo(current - 1); resetAuto(); }}
        aria-label="Previous"
      >←</button>

      <button
        className="slider-btn next"
        onClick={() => { goTo(current + 1); resetAuto(); }}
        aria-label="Next"
      >→</button>

      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => { goTo(i); resetAuto(); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-hint">
        Scroll <span className="arrow-down">↓</span>
      </div>
    </section>
  );
}