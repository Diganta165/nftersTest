import React from 'react';

const HighlightedBidCard = ({highlightedCardData}) => {
    try {
        if(!highlightedCardData) return;
        return (
            <div className='highlight_bid_card max-w-[400px] flex flex-col gap-y-6 sm:gap-y-8 md:min-w-[400px]'>
                <div className='image_wrapper w-100 max-h-[424px]'>
                    <img src={highlightedCardData?.image} />
                </div>

                <div className='card_contents flex w-100 justify-between'>
                    <div className='left_content flex flex-row items-center gap-2'>
                        {
                            highlightedCardData?.profilePic && <div className='profile_img_wrapper'>
                                <img src={highlightedCardData?.profilePic}/>
                            </div>
                            
                        }
                        <div className='profile_content flex flex-col'>
                            <h1 className='text-xl font-bold leading-[26px]'>{highlightedCardData?.name || ""}</h1>
                            <p className='text-sm font-normal leading-[18px] text-[#363639]'>{highlightedCardData?.stock || 0} in the stock</p>
                        </div>
                    </div>
                    <div className='right_content flex flex-col gap-2'>
                        <span className='text-xs font-medium leading-4 text-[#363639]'>Highest Bid</span>
                        <span className='flex flex-row gap-x-2.5 items-center'>
                            <span>
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_213)">
                                    <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#3A3A3A"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_0_213">
                                    <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            {
                                highlightedCardData?.price && <span>{highlightedCardData?.price} ETH</span>
                            }
                            
                        </span>
                    </div>
                </div>
            </div>
        );
    } catch (error) {console.log(error);};
};

export default HighlightedBidCard;