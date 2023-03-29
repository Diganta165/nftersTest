import React from 'react';

const CryptoPriceCapsule = ({price, capsulePadding, color, border= null}) => {
    return (
        <>
              <div className='flex flex-row items-center rounded-md gap-x-1' style={{border: (border)? border : "#fff", padding: capsulePadding}}>
                <span>
                    <svg width="8px" height="14px" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_0_213)">
                        <path d="M12.671 11.4564L6.50004 15.3231L0.325043 11.4564L6.50004 0.589722L12.671 11.4564ZM6.50004 16.5647L0.325043 12.6981L6.50004 21.9231L12.675 12.6981L6.50004 16.5647Z" fill={color}/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_213">
                        <rect width="13" height="21.3333" fill="white" transform="translate(0 0.589722)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </span>
                <span className='text-xs leading-4 font-bold' style={{color:color}}>{price} ETH</span>
              </div>
        </>
    );
};

export default CryptoPriceCapsule;