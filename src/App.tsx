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
            {/* House Links */}
            <Route path="/sustainability" element={<PlaceholderPage title="Sustainability" />} />
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
