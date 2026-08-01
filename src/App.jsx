import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accolades from './pages/Accolades';
import Testimonials from './pages/Testimonials';
import Tours from './pages/Tours';
import TourDetail from './pages/TourDetail';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetail />} />
      </Routes>
      <Footer />
    </>
  );
}
