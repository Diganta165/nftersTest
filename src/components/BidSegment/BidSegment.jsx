import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from '../../utils/ErrorBoundary';
import BidSegmentItems from '../BidSegmentItems/BidSegmentItems';
import HighlightedBidCard from '../HighligtedBidCard/HighlightedBidCard';
import "./BidSegment.css"

const BidSegment =() => {
    const [bidData,setBidData]=useState([]);
    // Fetch Bid data
    useEffect(()=>{
        fetch("../../../public/data/featuredItemsData.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => setBidData(data))
    }, []);

    return (
        <>
        {/* <ErrorBoundary> */}
            <div className='bid_segment flex flex-col items-center  mx-2 sm:flex-row sm: gap-[30px] lg:gap-[52px]'>
                <HighlightedBidCard highlightedCardData = {bidData[0]}/>

                <div className='bid_cards_wrapper flex flex-col scrollbar-hide min-w-[326px] md:gap-y-10 sm:overflow-y-auto sm:h-[480px] md:h-[540px]'>
                    {
                        bidData && bidData?.length > 0 && bidData?.map((element, index)=> <BidSegmentItems singleItem = {element}  key = {index} />)
                    }
                </div>
            </div>  

        {/* </ErrorBoundary> */}
            
        </>
    );
};

export default BidSegment;