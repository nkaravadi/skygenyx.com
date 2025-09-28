import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import bmiCalcImage from '../../public/assets/BMICalc.jpg';

const Apps: React.FC = () => (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="text-blue-600">Apps</span>
        </h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Discover our collection of innovative applications designed to enhance your digital experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* BMI Wellness Tracker Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-700">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={bmiCalcImage}
                    alt="BMI Wellness Tracker App Icon" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">BMI Wellness Tracker</h3>
              <p className="text-gray-600 mb-6">
                Track your BMI and wellness journey with our easy-to-use iOS app. Stay healthy, set goals, and monitor your progress!
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://apps.apple.com/us/app/bmi-wellness-tracker/id6752832385" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    <path d="M10 5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 100-2h-3V6a1 1 0 00-1-1z" />
                  </svg>
                  Download on the App Store
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="p-1 bg-gradient-to-r from-gray-400 to-gray-600">
            <div className="bg-white p-8 rounded-xl h-full flex flex-col">
              <div className="flex items-center justify-center mb-6 flex-grow">
                <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're working on something amazing! Stay tuned for our next innovative application.
              </p>
              <div className="mt-auto">
                <div className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-600 font-medium rounded-lg cursor-not-allowed">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking for something specific?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Have an idea for an app? We'd love to hear about it!
        </p>
        <a 
          href="mailto:info@skygenyx.com"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
);

export default Apps;
