import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalytics = () => {
  const location = useLocation();

  // Track page view on route change
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-BXGZVCT5RX', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  // Track custom events
  const trackEvent = (action: string, params: Record<string, any> = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, params);
    }
  };

  return { trackEvent };
};

// Example usage in a component:
// const { trackEvent } = useAnalytics();
// trackEvent('button_click', { button_name: 'contact_button' });
