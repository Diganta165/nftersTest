import React from 'react';
import BannerSection from '../../components/BannerSection/BannerSection';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <BannerSection />
        </>
    );
};

export default HomePage;