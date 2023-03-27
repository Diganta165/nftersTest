import React from 'react';

const PrimaryBtn = ({buttonContent, padding, fontSize, fontWeight, isSidebarElement, handleUpload}) => {
    return (
        <>
            <button className= {!isSidebarElement? "rounded-full": "rounded-full absolute bottom-0 -left-3"} onClick={handleUpload} style={{padding: `${padding}`, fontSize:`${fontSize}`, fontWeight:`${fontWeight}`, color: "#fff", backgroundColor: "#3D00B7", borderRadius:"60px"} }>{buttonContent}</button>
            
        </>
    );
};

export default PrimaryBtn;