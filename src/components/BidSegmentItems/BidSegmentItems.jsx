import React from 'react';
import CryptoPriceCapsule from '../CryptoPriceCapsule/CryptoPriceCapsule';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';

const BidSegmentItems = ({singleItem}) => {

    const bidItem = ()=> window.alert("bid something");

    try {
        if(!singleItem) return;
        return (
            <>
                <div className='bid_card flex flex-row gap-5 items-center'>
                    {
                       singleItem?.image && <div className='card_img_wrapper w-100 max-w-[148px]'>
                            <img src={singleItem?.image} className="w-100"/>
                        </div>
                    }
                    <div className='card_content flex flex-col'>
                        <h3 className='text-xl font-bold leading-[26px]'>{singleItem?.name || ""}</h3>
                        <div className='flex flex-row gap-x-2 items-center mt-[10px]'>
                            {
                                singleItem?.profilePic && <img src={singleItem?.profilePic}/>
                            }
                            <CryptoPriceCapsule price = {singleItem?.price} capsulePadding = "8px" color = "#00AC4F" border= "1px solid #00AC4F" />
                            <div className='text-sm leading-[18px] font-normal text-[#757575]'> 1 of {singleItem?.stock}</div>
                        </div>
                        <div className='mt-[16px]'>

                            <SecondaryBtn buttonContent= "Place a bid"  padding= "14px 20px" fontSize = "14px" fontWeight = "400" isSidebarElement = {false} lineHeight = "17px" handleCallBack= {bidItem}  />
                        </div>
                        
                    </div>
                </div>
            </>
        );
    } catch (error) {console.log(error)};
};

export default BidSegmentItems;