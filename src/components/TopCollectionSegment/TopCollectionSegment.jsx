import React, { useEffect, useState } from 'react';
import TopItem from '../TopItem/TopItem';

const TopCollectionSegment = () => {
    let [topData,setTopData]=useState([]);

    useEffect(()=>{
        fetch("../../../public/data/topCollectionData.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => setTopData(data))
    }, []);
    console.log("topData", topData)
    return (
        <>
          <div className='top_collections_segment flex flex-col border-l-2 pl-8'>
            <div className='top_content flex flex-col gap-2.5'>
                <h1 className='segment_title uppercase text-xl font-bold leading-6 font-integral'>Top Collections Over</h1>
                <span className='info_time text-lg font-bold leading-6 text-[#3D00B7] font-dmSans'>Last 7 days</span>
            </div>
            <ul className='bottom_content flex flex-col '>
                {
                    topData && topData?.map((element, index) => <TopItem item={element} key={index} serial={++index} />)
                }
            </ul>
          </div>  
        </>
    );
};

export default TopCollectionSegment;