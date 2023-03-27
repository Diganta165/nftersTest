import React from 'react';

const SecondaryBtn = ({buttonContent, padding, fontSize, fontWeight, isSidebarElement, handleCallBack}) => {
    return (
        <>
            <button  className= {!isSidebarElement? "rounded-full": "rounded-full absolute bottom-0 -right-3" }  onClick={handleCallBack} style={{padding: `${padding}`, fontSize:`${fontSize}`, fontWeight:`${fontWeight}`, color: "#3D00B7", backgroundColor: "#fff", borderRadius:"60px", border:"2px solid #3D00B7"} }>{buttonContent}</button>
        </>
    );
};

export default SecondaryBtn;