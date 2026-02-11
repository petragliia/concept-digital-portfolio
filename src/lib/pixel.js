import ReactPixel from 'react-facebook-pixel';

const options = {
    autoConfig: true,
    debug: false,
};

export const initPixel = () => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
            if (pixelId) {
                ReactPixel.init(pixelId, {}, options);
            } else {
                console.warn('Facebook Pixel ID (VITE_FACEBOOK_PIXEL_ID) not found in environment variables.');
            }
        }
    }
};

export const grantConsent = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cookie_consent', 'true');
        const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;
        if (pixelId) {
            ReactPixel.init(pixelId, {}, options);
            ReactPixel.pageView(); // Track the current page view immediately
        }
    }
};

export const trackPageView = () => {
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            ReactPixel.pageView();
        }
    }
};

export const trackPixelEvent = (event, data = {}) => {
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            ReactPixel.track(event, data);
        }
    }
};
