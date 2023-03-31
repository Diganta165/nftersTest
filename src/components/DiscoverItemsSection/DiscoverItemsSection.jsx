import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Item from '../Item/Item';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';



const DiscoverItemsSection = () => {

    let [categoryData,setCategoryData]=useState([]);
    let [itemsData,setItemsData]=useState([]);
    let [filterItemsData, setFilterItemsData] = useState([]);

    useEffect(()=>{
        fetch("../../../public/data/allItemsCategoriesData.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => setCategoryData(data))
    }, []);
    useEffect(()=>{
        fetch("../../../public/data/allNFTsData.json", {headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}})
        .then(res => res.json())
        .then(data => {setItemsData(data); setFilterItemsData(data)})
    }, []);

    //Remove All Active Category
    const removeActiveCategory = () =>{
        document.querySelectorAll(".categoryButton").forEach(element=> element?.classList.contains("active") && element?.classList.remove("active"));
    };

    // Selected category handler
    const categorySelectHandler = (event,selectedCategory) =>{
        removeActiveCategory();
        event.target.classList.add("active");
        const filteredData = itemsData?.filter(element=> element?.category === selectedCategory);
        (!filteredData?.length)? setFilterItemsData(itemsData):setFilterItemsData(filteredData);
        
    };

    //More NFTs btn handler
    const viewMoreBtn = ()=> alert("View more");

    return (
        <>
            <section className='discover_section flex flex-col px-2 lg:px-[80px] xxl:px-[120px] py-16 bg-background_color_one gap-y-9'>
                <div className='title_and_options_wrapper flex flex-col gap-y-9'>
                    <div className='title_wrapper'>
                        <h1 className='uppercase integral text-[34px] leading-10 font-bold'>Discover More NFTs</h1>
                    </div>
                    <div className='category_and_filer_wrapper flex justify-between flex-wrap'>
                        <div className='categories flex flex-row gap-3 flex-wrap' id='all_categories'>
                            {
                                categoryData?.map((element, index) => <Category category={element} key={index} clickEventFunctionHandler= {categorySelectHandler} />)
                            }
                        </div>
                        <div className='filter py-2.5 px-5 bg-category_btn_bg_color rounded-[100px] flex flex-row gap-x-2.5 items-center'>
                            <span className='hamburger'>
                                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.33333 16H14.6667V13.3333H9.33333V16ZM0 0V2.66667H24V0H0ZM4 9.33333H20V6.66667H4V9.33333Z" fill="#371C87"/>
                                </svg>
                            </span>
                            <span className='text-tertiary_color'>All Filters</span>
                        </div>
                    </div>
                    <div className='all_items grid grid-cols-1 place-items-center gap-3  sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 lg:min-w-[270px]'>
                        {
                            filterItemsData?.map((element, index) => <Item item={element} key={index}/>)
                        }
                    </div>

                    <div className='view_more_btn_wrapper w-100 flex justify-center mt-[75px]'>
                        <button className='bg-transparent rounded-[50px] border-2 border-primary_color bg-transparent py-5 px-10 text-primary_color dmSans text-xl font-medium hover:bg-primary_color hover:text-secondary_color ease-linear duration-300' onClick={viewMoreBtn}>More NFTs</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscoverItemsSection;