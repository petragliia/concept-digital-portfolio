const options = {
    autoConfig: true,
    debug: false,
};

export const initPixel = async () => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || import.meta.env?.VITE_FACEBOOK_PIXEL_ID;
            if (pixelId) {
                const ReactPixel = (await import('react-facebook-pixel')).default;
                ReactPixel.init(pixelId, {}, options);
            } else {
                console.warn('Facebook Pixel ID not found in environment variables.');
            }
        }
    }
};

export const grantConsent = async () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cookie_consent', 'true');
        const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || import.meta.env?.VITE_FACEBOOK_PIXEL_ID;
        if (pixelId) {
            const ReactPixel = (await import('react-facebook-pixel')).default;
            ReactPixel.init(pixelId, {}, options);
            ReactPixel.pageView(); // Track the current page view immediately
        }
    }
};

export const trackPageView = async () => {
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            const ReactPixel = (await import('react-facebook-pixel')).default;
            ReactPixel.pageView();
        }
    }
};

export const trackPixelEvent = async (event, data = {}) => {
    if (typeof window !== 'undefined') {
        const consent = localStorage.getItem('cookie_consent');
        if (consent === 'true') {
            const ReactPixel = (await import('react-facebook-pixel')).default;
            ReactPixel.track(event, data);
        }
    }
};
