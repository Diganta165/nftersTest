import React from 'react';
import BidSegment from '../BidSegment/BidSegment';
import TopCollectionSegment from '../TopCollectionSegment/TopCollectionSegment';

const BidAndTopCollectionSection = () => {
    return (
        <>
            <section className='mt-8 xl:my-[134px] xl:mx-[120px]'>
                <BidSegment />
                <TopCollectionSegment />
            </section>
        </>
    );
};

export default BidAndTopCollectionSection;