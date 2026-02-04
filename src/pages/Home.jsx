import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../features/hero';
import { MethodEvolution } from '../features/method';
import { Portfolio, WhyUsSection } from '../features/portfolio';
import { Contact } from '../features/contact';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const scrollTo = params.get('scrollTo');

        if (scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(scrollTo);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <MethodEvolution />
            <WhyUsSection />
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
