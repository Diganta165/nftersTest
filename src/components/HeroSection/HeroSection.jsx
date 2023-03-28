import React from 'react';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import heroData from "../../data/heroSectionNumberContent.json";
import HeroBottomContent from '../HeroBottomContent/HeroBottomContent';
import sliderData from "../../data/heroSectionSliderData.json";
import SliderCard from '../SliderCard/SliderCard';

const HeroSection = () => {
    const handleUpload = () =>{window.alert("Explore Something New!");};
    return (
        // sm:w-2/4 lg:w-3/4
        <>
            <section className='flex flex-col px-2 pt-8 gap-y-10  lg:flex-row  xl:px-[120px] xl:pt-14'>
                <div className='flex flex-col justify-center items-center gap-y-10 order-2 lg:w-2/4  lg:text-ellipsis lg:items-start lg:order-1'>
                    <div className='content flex flex-col gap-y-5'>
                        <h1 className='uppercase text-[40px] font-bold leading-[48px] tracking-wider text-center lg:text-left xl:w-[612px]'>Discover, and collect digital art NFT</h1>
                        <p className='text-[#565656] text-xl leading-8 text-center lg:text-left xl:w-[470px]'>Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                    </div>
                    <div className='button_and_content_wrapper flex flex-col items-center gap-y-6 sm:gap-y-[30px] lg:items-start'>
                        <div className='button_wrapper w-[209px]'>
                            <PrimaryBtn buttonContent = "Explore Now" padding = "20px 40px" fontSize = "20px" fontWeight = "400" isSidebarElement = {false} handleUpload = {handleUpload}/>
                        </div>
                        <div className='flex gap-x-4 sm: gap-x-6'>
                        {
                            heroData?.map((element, index) => <HeroBottomContent content={element?.content} type = {element?.type} key= {index} />)
                        }
                            
                        </div>
                    </div>
                    
                </div>
                {/* lg:right-0 */}
                {/* lg:absolute */}
                <div className='  order-1 lg:order-2 lg:w-2/4 flex justify-center lg:relative lg:block'>
                {/* lg:relative */}
                    <div className='hero_slider_wrapper flex overflow-x-auto snap-mandatory snap-x gap-x-3 order-1 lg:block lg:order-2 lg:relative lg:overflow-visible'>
                        {
                            sliderData?.map((element, index) => <SliderCard singleSlider ={element} keyValue={index+1} leftPosition= {index * 30} topPosition = {index * 20} key ={index}/>)
                        }
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default HeroSection;