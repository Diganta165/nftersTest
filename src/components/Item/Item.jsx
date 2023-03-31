import React from 'react';

const Item = ({item}) => {
    const bidHandler = (bidItem) => window.alert(`Bid ${bidItem}` )
    return (
        <>
            <div className='single_card p-2.5 max-w-[270px] bg-[#fff] rounded-[14px] flex flex-col gap-y-[22px]'>
                {
                    item?.image && <div className='image_wrapper relative'>
                                        <div className='main_img_wrapper w-[247px] h-[222px] sm:max-w[220px] xl:w-[247px] xl:h-[222px]'>
                                            <img src={item?.image}  className="w-[100%] h-[100%]" />
                                        </div>
                                        <div className='profile_image_set_wrapper relative bottom-0'>
                                            <img src={item.subscribed[0].image} className="absolute left-[12px] -bottom-3"/>
                                            <img src={item.subscribed[1].image} className="absolute left-[36px] -bottom-3"/>
                                            <img src={item.subscribed[2].image} className="absolute left-[60px] -bottom-3"/>
                                            <img src={item.subscribed[3].image} className="absolute left-[84px] -bottom-3"/>
                                            <img src={item.subscribed[4].image} className="absolute left-[102px] -bottom-3"/>
                                        </div>
                                    </div>
                }
                
                <div className='card_info_wrapper'>
                    <div className='content_top flex flex-col gap-y-2.5 pb-[20px] border-b-2 border-category_btn_bg_color'>
                        <h3 className='card_title dmSans text-xl font-bold leading-5'>{item?.title || ""}</h3>
                        <div className='price_and_quantity_wrapper flex flex-row justify-between'>
                            <div className='price_wrapper flex flex-row gap-1.5'>
                                <span>
                                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_0_213)">
                                        <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill="#00AC4F"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_0_213">
                                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <span className='price text-highlight_green_color'>{item?.price}</span>
                            </div>
                            <span className='quantity text-[#838383] leading-5 text-sm font-medium'>1 of {item?.amount}</span>
                        </div>
                    </div>
                    <div className='content_bottom flex flex-row justify-between'>
                        <div className='remaining_time py-1 px-3 bg-category_btn_bg_color rounded-[100px] text-tertiary_color dmSans text-xs leading-5 font-medium'>{item?.time} left</div>
                        <button className='place_a_bid_btn py-1 px-3 bg-category_btn_bg_color rounded-[100px] text-tertiary_color dmSans text-xs leading-5 font-medium cursor-pointer' onClick={()=>bidHandler(item.title)}>Place a bid</button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Item;