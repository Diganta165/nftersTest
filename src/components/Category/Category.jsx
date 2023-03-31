import React from 'react';
import "./Category.css";

const Category = ({category, clickEventFunctionHandler}) => {
    return (
        <>  
        {
        (category=== "All Items")? <h3 className= "categoryButton py-2.5 px-5 bg-category_btn_bg_color rounded-[100px] cursor-pointer active "  onClick={()=>clickEventFunctionHandler(event,category)}>{category}</h3>  
        : <h3 className = "categoryButton py-2.5 px-5 bg-category_btn_bg_color rounded-[100px] cursor-pointer"  onClick={()=>clickEventFunctionHandler(event,category)}>{category}</h3> 
        }  
        </>
    );
};

export default Category;