import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { useAnalytics } from './hooks/useAnalytics';
import { motion, AnimatePresence } from 'framer-motion';
import { getBasePath } from './utils/url';
import Logo from './components/Logo';
import Landing from './pages/Landing';
import Apps from './pages/Apps';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ to, children, onClick, className = '' }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div className="relative">
      <Link
        to={to}
        onClick={onClick}
        className={`px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
          isActive ? 'font-medium text-blue-600' : ''
        } ${className}`}
      >
        {children}
      </Link>
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
          layoutId="nav-underline"
        />
      )}
    </div>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleContactClick = useCallback(() => {
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        'event_category': 'engagement',
        'event_label': 'contact_button_click',
        'method': location.pathname === '/' ? 'homepage' : 'navigation'
      });
    }
    if (location.pathname !== '/') {
      // If we're not on the homepage, navigate to the homepage first
      window.location.href = `${getBasePath()}/#contact`;
    } else {
      // If we're already on the homepage, just scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.pathname]);

  // Initialize analytics
  useAnalytics();

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-BXGZVCT5RX', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

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
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.header key="header"
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
                  <div 
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
                    onClick={handleContactClick}
                  >
                    Contact Us
                  </div>
                </nav>

                {/* Mobile menu button */}
                <button 
                  className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white shadow-lg overflow-hidden"
              >
                <nav className="px-4 py-2 space-y-2">
                  <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                  <NavLink to="/apps" onClick={() => setIsMenuOpen(false)}>Apps</NavLink>
                  <NavLink to="/privacy-policy" onClick={() => setIsMenuOpen(false)}>Privacy Policy</NavLink>
                  <div 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleContactClick();
                    }}
                  >
                    Contact Us
                  </div>
                </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-grow">
          <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <Logo withText={true} className="h-8 text-white" />
                  <p className="mt-2 text-gray-400">Building the future of software.</p>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-center text-gray-400 text-sm">
                  &copy; {new Date().getFullYear()} Skygenyx. All rights reserved.
                </p>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default App;
