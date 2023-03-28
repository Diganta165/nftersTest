import React, { useState } from 'react';
import "./SliderCard.css";

const SliderCard = (props) => {
    const {title, profilePic, name, bidPrice, cryptoSVG, endTime, image} = props.singleSlider;
    return (
        <>
        {/* max-w-[400px] max-h-[440px] */}
            {/* <div className='snap-center lg:absolute lg:right-0 lg:min-h-[440px]' style={{zIndex:4 - props.keyValue, right: -props.leftPosition + "px", top: props.topPosition + "px"}} > */}
            <div className='slider_card snap-center lg:absolute lg:right-0 lg:min-h-[440px] transition duration-700 ease-in-out hover:scale-125' style={{zIndex:4 - props.keyValue, right: (props.leftPosition === 0)? "50px" : (props.leftPosition === 30)? "20px" : "-10px", top: props.topPosition + "px"}}>
                <div className='relative'>
                    <div className='card_image_wrapper max-w-[400px] max-h-[440px]'>
                        <img src={image} className="w-full min-w-[300px]" />
                    </div>
                    <div className='card_contents'>
                        <div className='top_content absolute top-6 left-6 flex flex-col gap-y-2.5'>
                            <h1 className='font-bold text-xl text-[#fff] lg:text-[28px]'>{title}</h1>
                            <div className='flex items-center gap-x-3.5'>
                                <img src={profilePic} />
                                <h1 className='font-bold text-base text-[#fff] lg:text-xl '>{name}</h1>
                            </div>
                        </div>
                        <div className='bottom_content absolute py-3.5 px-6 bottom-6 left-2.5   bg-white bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg'>
                            <div className='flex justify-between gap-x-[104px] w-full'>
                                <div className='bottom_left_content flex flex-col gap-y-2'>
                                    <span className='text-xs font-medium leading-4 text-[#fff]'>Current Bid</span>
                                    <span className='flex gap-x-2.5 flex-row'>
                                        <img src={cryptoSVG} />
                                        <span className='text-base font-medium leading-5 text-[#fff]'>{bidPrice}</span> 
                                    </span>
                                </div>
                                <div className='bottom_right_content'>
                                    <span className='text-xs font-medium leading-4 text-[#fff]'>Ends in</span>
                                    <span className='flex gap-x-2.5 flex-row'>
                                        {/* <span className='text-base font-medium leading-5 text-[#fff]'>{endTime}</span>  */}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderCard;