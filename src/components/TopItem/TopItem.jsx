import React from 'react';

const TopItem = ({item, serial}) => {
    return (
        <>
            <li className='flex flex-row gap-x-[22px] items-center py-4 px-1.5 border-b-2 last:border-b-0'>
                <span className='font-bold text-2xl leading-6 '>{serial}</span>
                {
                    item?.image && <div className='profile_image_wrapper relative'>
                        <img src={item?.image} />
                        {
                            item?.isVerify && <span className='absolute -top-2 -right-2'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="10" width="16" height="11" fill="white"/>
                                <path d="M28.7479 14.3182L26.9345 12.2115C26.5879 11.8115 26.3079 11.0648 26.3079 10.5315V8.26483C26.3079 6.8515 25.1479 5.6915 23.7345 5.6915H21.4679C20.9479 5.6915 20.1879 5.4115 19.7879 5.06483L17.6812 3.2515C16.7612 2.46483 15.2545 2.46483 14.3212 3.2515L12.2278 5.07817C11.8278 5.4115 11.0678 5.6915 10.5478 5.6915H8.24114C6.8278 5.6915 5.6678 6.8515 5.6678 8.26483V10.5448C5.6678 11.0648 5.3878 11.8115 5.05447 12.2115L3.25447 14.3315C2.48114 15.2515 2.48114 16.7448 3.25447 17.6648L5.05447 19.7848C5.3878 20.1848 5.6678 20.9315 5.6678 21.4515V23.7315C5.6678 25.1448 6.8278 26.3048 8.24114 26.3048H10.5478C11.0678 26.3048 11.8278 26.5848 12.2278 26.9315L14.3345 28.7448C15.2545 29.5315 16.7612 29.5315 17.6945 28.7448L19.8012 26.9315C20.2012 26.5848 20.9479 26.3048 21.4812 26.3048H23.7479C25.1612 26.3048 26.3212 25.1448 26.3212 23.7315V21.4648C26.3212 20.9448 26.6012 20.1848 26.9479 19.7848L28.7612 17.6782C29.5345 16.7582 29.5345 15.2382 28.7479 14.3182ZM21.5479 13.4782L15.1079 19.9182C14.9212 20.1048 14.6679 20.2115 14.4012 20.2115C14.1345 20.2115 13.8812 20.1048 13.6945 19.9182L10.4678 16.6915C10.0811 16.3048 10.0811 15.6648 10.4678 15.2782C10.8545 14.8915 11.4945 14.8915 11.8811 15.2782L14.4012 17.7982L20.1345 12.0648C20.5212 11.6782 21.1612 11.6782 21.5479 12.0648C21.9345 12.4515 21.9345 13.0915 21.5479 13.4782Z" fill="#1E93FF"/>
                                </svg>
                            </span>
                        }
                    </div>
                }
    
                <div className='profile_info flex gap-x-[22px] items-center'>
                    <div className='profile_name_price_wrapper flex flex-col gap-y-2.5'>
                        <h3 className='font-dmSans text-base leading-4 font-medium'>{item?.title || ""}</h3>
                        <span className='flex flex-row gap-x-2.5 items-center'>
                            <span>
                                <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_143)">
                                    <path d="M12.671 11.3796L6.50006 15.2463L0.325058 11.3796L6.50006 0.512939L12.671 11.3796ZM6.50006 16.4879L0.325058 12.6213L6.50006 21.8463L12.6751 12.6213L6.50006 16.4879Z" fill="#000"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_0_143">
                                    <rect width="13" height="21.3333" fill="#000" transform="translate(0 0.512939)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <span className='latest_price font-popins text-top_collection_text_color text-sm leading-[14px] font-semibold'>{item?.price}</span>
                        </span>
                    </div>
                    {
                        (item?.priceFluctuation > 0)? <div className = "price_fluctuation text-xl leading-5 font-semibold text-fluctuate_color_one">{item?.priceFluctuation} % </div> 
                        :   <div className="price_fluctuation text-xl leading-5 font-semibold text-fluctuate_color_two">{item?.priceFluctuation} % </div>
                    }
                    
                </div>

            </li>
        </>
    );
};

export default TopItem;