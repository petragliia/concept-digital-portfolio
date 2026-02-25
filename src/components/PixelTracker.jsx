"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initPixel, trackPageView } from '../lib/pixel';

const PixelTracker = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        initPixel();
    }, []);

    useEffect(() => {
        trackPageView();
    }, [pathname, searchParams]);

    return null;
};

export default PixelTracker;
