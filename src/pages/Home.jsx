import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import MethodEvolution from '../components/MethodEvolution';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

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
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
