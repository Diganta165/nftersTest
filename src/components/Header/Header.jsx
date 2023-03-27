import React, {useState} from 'react';
import {Link} from "react-router-dom"
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import SecondaryBtn from '../SecondaryBtn/SecondaryBtn';
import  "./header.css";
const Header = () => {
    
    let [isOpen, setIsOpen] = useState(false);

    // Sidebar
    const openSidebar =()=>setIsOpen(true);
    const closeSidebar = ()=> setIsOpen(false);
    const clickOutsideSidebar = (event) =>{
        const clickedInside = document.getElementById("sidebar_nav_wrapper").contains(event.target);
        if(!clickedInside) closeSidebar();
    };

    // Sidebar Btns
    const handleUpload = ()=>window.alert("Upload Something...");

    return (
        <>
            <ul className='flex justify-between items-center px-2 sm: py-2 lg:py-[30px] xl:px-[120px]'>
                <li className='business_name_wrapper'>
                    <h1 className='business_name primary-color text-[#3D00B7] font-bold text-2xl lg:h-7 lg:leading-7'>NFTERS</h1>
                </li>
                <li className='header_nav_wrapper flex flex-row gap-x-12 hidden lg:flex lg:w-80'>
                    <span className='link_element hidden lg:block'>
                        <Link to={"/marketplace"} className="text-[16px] font-medium">Marketplace</Link>
                    </span>
                    <span className='link_element hidden lg:block'>
                        <Link to={"/resource"} className="font-medium">Resource</Link>
                    </span>
                    <span className='link_element hidden lg:block'>
                        <Link to={"/about"} className="font-medium">About</Link>
                    </span>
                </li>
                <li className='search_element w-52 h-8 hidden sm:block w-96 lg:w-[300px] lg:h-[50px] lg:before:right-[14px] lg:before:top-[16px]'>
                    <input type="text" placeholder='Search' className='search_input box-border w-25 h-8 border-solid border-2 border-[#EFEFEF] rounded-[100px] placeholder: py-[14px] pl-[30px] sm: w-96 lg:w-[300px] lg:h-[50px] lg:text-base lg:leading-5'/>
                </li>

                <li className='hamburger lg:hidden' onClick={openSidebar}>
                    <svg id="Ham_Icon" data-name="Ham Icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> <rect id="Rectangle_53" data-name="Rectangle 53" width="20" height="20" fill="none"/> <g id="Hamburger" transform="translate(0 4.5)"> <g id="Rectangle_54" data-name="Rectangle 54" stroke="#000" strokeWidth="1"> <rect width="20" height="2" stroke="none"/> <rect x="0.5" y="0.5" width="19" height="1" fill="none"/> </g> <g id="Rectangle_55" data-name="Rectangle 55" transform="translate(7 9)" stroke="#000" strokeWidth="1"> <rect width="13" height="2" stroke="none"/> <rect x="0.5" y="0.5" width="12" height="1" fill="none"/> </g> </g> </svg>
                </li>
                <li className='header_btn_wrapper hidden lg:flex lg:gap-x-5'>
                    <PrimaryBtn buttonContent= "Upload" padding = "18px 40px" fontSize= "14px" fontWeight = "700" isSidebarElement = {false} handleUpload = {handleUpload} />
                    <SecondaryBtn buttonContent= "Connect Wallet" padding = "18px 22px" fontSize= "14px" fontWeight = "700" isSidebarElement = {false} handleCallBack = {handleUpload} />
                </li>
                
            </ul>
            <ul className='flex justify-center items-center mt-3 sm:hidden'>
                <li className='search_element w-full mx-2 h-8 flex justify-center items-center'>
                    {/* w-80  h-12 w-52 w-25*/}
                    <input type="text" placeholder='Search' className='search_input box-border mx-2 w-full h-8 border-solid border-2 border-[#EFEFEF] rounded-[100px] placeholder: py-[14px] pl-[30px]'/>
                </li>
            </ul>
            {/* #######
                Sidebar Starts
             ##########*/}
            <div className={isOpen === true ? "sidebar sidebar_popup sidebar_show" : "sidebar sidebar_popup"} id='sidebar_section' onClick={(event)=> clickOutsideSidebar(event)}>
                <div className='sidebar_container' id='sidebar_container_id' >
                    <div>
                        <span className="sidebar_close_icon_wrapper" id='sidebar_close_icon' onClick={closeSidebar}>
                            <svg className="sidebar_close_icon" xmlns="http://www.w3.org/2000/svg" width="17.121" height="17.121" viewBox="0 0 17.121 17.121"> <g id="Menu_icon" data-name="Menu icon" transform="translate(-301.439 -35.439)"> <line id="Shape_3" data-name="Shape 3" x2="21.213" transform="translate(302.5 51.5) rotate(-45)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"></line> <line id="Shape_1" data-name="Shape 1" x2="21.213" transform="translate(302.5 36.5) rotate(45)" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="1.5"></line> </g> </svg></span>
                    </div>
                    <li className='navigation_link_list sidebar_nav_link_wrapper' id='sidebar_nav_wrapper' >
                        <Link to="/marketplace" className='navigation_link sidebar_nav_link'>Marketplace</Link>
                        <Link to="/resource" className='navigation_link sidebar_nav_link'>Resource</Link>
                        <Link to="/about" className='navigation_link sidebar_nav_link'>About</Link>
                    </li>
                    <div className='sidebar_btn_wrapper'>
                        <PrimaryBtn buttonContent= "Upload" padding = "8px 20px" fontSize= "14px" fontWeight = "700" isSidebarElement = {true} handleUpload = {handleUpload} />
                        <SecondaryBtn buttonContent= "Connect Wallet" padding = "6px 12px" fontSize= "14px" fontWeight = "700" isSidebarElement = {true} handleCallBack = {handleUpload} />
                    </div>
                </div>
            </div>
            {/* #######
                Sidebar Ends
             ##########*/}
        </>
    );
};

export default Header;