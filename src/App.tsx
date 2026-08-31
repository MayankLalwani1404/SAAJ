import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import PlaceholderPage from '@/pages/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sand-50 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Shop Links */}
            <Route path="/sarees" element={<PlaceholderPage title="Sarees" />} />
            <Route path="/lehengas" element={<PlaceholderPage title="Lehengas" />} />
            <Route path="/bridal-couture" element={<PlaceholderPage title="Bridal Couture" />} />
            <Route path="/menswear" element={<PlaceholderPage title="Menswear" />} />
            <Route path="/new-arrivals" element={<PlaceholderPage title="New Arrivals" />} />
            {/* House Links */}
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
            <Route path="/press" element={<PlaceholderPage title="Press" />} />
            <Route path="/careers" element={<PlaceholderPage title="Careers" />} />
            {/* Client Care Links */}
            <Route path="/shipping" element={<PlaceholderPage title="Shipping" />} />
            <Route path="/returns" element={<PlaceholderPage title="Returns" />} />
            <Route path="/garment-care" element={<PlaceholderPage title="Garment Care" />} />
            <Route path="/faqs" element={<PlaceholderPage title="FAQs" />} />
            {/* Legal Links */}
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
            <Route path="/cookies" element={<PlaceholderPage title="Cookie Policy" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
