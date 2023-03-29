import React from 'react';

const SecondaryBtn = ({buttonContent, padding, fontSize, fontWeight, isSidebarElement, lineHeight, handleCallBack}) => {
    const addBtnHoverCSS = (event) => {
        event.target.style.color = "#fff";
        event.target.style.backgroundColor = "#3D00B7";
    };

    const resetBtnHoverCSS = (event) =>{
        event.target.style.color = "#3D00B7";
        event.target.style.backgroundColor = "#fff";
    };
    return (
        <>
            <button  className= {!isSidebarElement? "ease-in duration-300 rounded-full hover:text-[#fff] hover:bg-[#3D00B7]": "ease-in duration-300 rounded-full absolute bottom-0 -right-3 hover:text-[#fff] hover:bg-[#3D00B7]" }  onClick={handleCallBack} onMouseOver ={addBtnHoverCSS} onMouseLeave={resetBtnHoverCSS} style={{padding: `${padding}`, fontSize:`${fontSize}`, fontWeight:`${fontWeight}`, color: "#3D00B7", backgroundColor: "#fff", borderRadius:"60px", border:"2px solid #3D00B7", lineHeight: lineHeight && "17px" } }>{buttonContent}</button>
        </>
    );
};

export default SecondaryBtn;