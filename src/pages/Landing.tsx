import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '💡',
    title: 'Innovative Solutions',
    description: 'Cutting-edge software solutions tailored to your needs'
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Leveraging artificial intelligence for smarter applications'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Beautiful, responsive applications for all devices'
  },
  {
    icon: '🔒',
    title: 'Privacy Focused',
    description: 'Your data security is our top priority'
  }
];

const Landing: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    {/* Hero Section */}
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Building the <span className="text-blue-600">Future</span> of Software
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Skygenyx creates innovative software solutions that leverage the latest technologies to solve real-world problems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="#contact" 
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Link>
            <a 
              href="/apps"
              className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 border-2 border-blue-600"
            >
              Our Apps
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTQgM0g2djU0aDQ4VjN6IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdiZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')]"></div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-xl text-gray-600">Innovative solutions for the digital age</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Get in touch with us today to discuss how we can help bring your ideas to life.</p>
        <a 
          href="mailto:info@skygenyx.com"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          onClick={() => {
            if (window.gtag) {
              window.gtag('event', 'contact_click', {
                'event_category': 'engagement',
                'event_label': 'landing_contact_button',
                'method': 'email'
              });
            }
          }}
        >
          Contact Us
        </a>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Skygenyx</h3>
            <p className="text-gray-400 mt-2">Building the future of software</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/apps" className="text-gray-300 hover:text-white transition-colors">Apps</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Skygenyx. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
);

export default Landing;
