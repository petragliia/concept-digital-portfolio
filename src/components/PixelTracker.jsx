import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initPixel, trackPageView } from '../lib/pixel';

const PixelTracker = () => {
    const location = useLocation();

    useEffect(() => {
        initPixel();
    }, []);

    useEffect(() => {
        trackPageView();
    }, [location]);

    return null;
};

export default PixelTracker;
