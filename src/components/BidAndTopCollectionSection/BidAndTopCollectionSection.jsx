import React from 'react';
import BidSegment from '../BidSegment/BidSegment';
import TopCollectionSegment from '../TopCollectionSegment/TopCollectionSegment';

const BidAndTopCollectionSection = () => {
    return (
        <>
        {/* lg:gap-x-[52px] xl:my-[134px] xl:mx-[120px] */}
            <section className='mt-8 flex flex-col gap-y-[42px] justify-evenly lg:flex-row '>
                <BidSegment />
                <TopCollectionSegment />
            </section>
        </>
    );
};

export default BidAndTopCollectionSection;