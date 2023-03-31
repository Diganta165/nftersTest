import React from 'react';
import BannerSection from '../../components/BannerSection/BannerSection';
import BidAndTopCollectionSection from '../../components/BidAndTopCollectionSection/BidAndTopCollectionSection';
import DiscoverItemsSection from '../../components/DiscoverItemsSection/DiscoverItemsSection';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <BannerSection />
            <BidAndTopCollectionSection />


            <DiscoverItemsSection />
        </>
    );
};

export default HomePage;