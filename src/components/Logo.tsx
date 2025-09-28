import React from 'react';

const Logo: React.FC<{ className?: string; withText?: boolean }> = ({ className = '', withText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Cloud Shape */}
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Cloud base */}
          <path 
            d="M31.6667 20C31.6667 15.4 27.95 11.6667 23.3333 11.6667C22.25 8.33333 19.15 6 15.5833 6C11.1333 6 7.5 9.65 7.5 14.1167C7.5 14.4 7.51667 14.6833 7.55 14.95C4.6 16.0667 2.5 18.8833 2.5 22.1667C2.5 26.2167 5.78333 29.5 9.83333 29.5H31.6667C34.8 29.5 37.5 26.8 37.5 23.6667C37.5 20.5333 34.8 18.5 31.6667 18.5C31.7667 19.1833 31.6667 19.6 31.6667 20Z" 
            fill="url(#paint0_linear)"
          />
          
          {/* Organic Circuit/Brain Pattern */}
          <path 
            d="M12 18C12 18 14 16 16 17C18 18 20 16 22 17" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path 
            d="M18 22C18 22 20 20 22 21C24 22 26 20 28 21" 
            stroke="white" 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="12" cy="18" r="1.5" fill="white" />
          <circle cx="16" cy="17" r="1" fill="white" />
          <circle cx="22" cy="17" r="1" fill="white" />
          <circle cx="28" cy="21" r="1" fill="white" />
          <circle cx="26" cy="25" r="1" fill="white" />
          <path 
            d="M22 21C22 21 24 23 26 22" 
            stroke="white" 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          <defs>
            <linearGradient 
              id="paint0_linear" 
              x1="20" 
              y1="6" 
              x2="20" 
              y2="29.5" 
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4DA8DA"/>
              <stop offset="1" stopColor="#1E40AF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text */}
      {withText && (
        <span className="ml-3 text-2xl font-bold tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            SKYGENYX
          </span>
        </span>
      )}
    </div>
  );
};

export default Logo;
