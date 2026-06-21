import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Accolades from './pages/Accolades';
import Testimonials from './pages/Testimonials';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accolades" element={<Accolades />} />
        <Route path="/testimonials" element={<Testimonials/>} />
      </Routes>
      <Footer />
    </>
  );
}
