import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './components/Logo';
import Landing from './pages/Landing';
import Apps from './pages/Apps';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`relative px-4 py-2 text-lg font-medium transition-colors ${
        isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {children}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
          layoutId="nav-underline"
        />
      )}
    </Link>
  );
};

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-4'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <Logo withText={true} className="h-10" />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-2">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/apps">Apps</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <Link 
                  to="/#contact" 
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </nav>

              {/* Mobile menu button */}
              <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </motion.header>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
