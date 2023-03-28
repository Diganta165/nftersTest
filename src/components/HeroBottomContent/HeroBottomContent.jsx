import React from 'react';

const HeroBottomContent = ({content, type}) => {
    return (
        <>
            <p className='flex flex-col justify-items-center '>
                <span className='text-[30px] font-bold leading-[48px] tracking-wider gap-x-4 sm:text-[40px] sm:gap-x-6'>{content}</span>
                <span className="text-base font-normal leading-8 text-[#565656] sm:text-xl ">{type}</span>
            </p>
        </>
    );
};

export default HeroBottomContent;