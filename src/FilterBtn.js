import React from "react";
export default function FilterBtn (props){
 
    let category = props.category;
    let setcategory = props.setcategory;
    
    function filterHandler(title){
        setcategory(title);
    }

    return(

        <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 
        border-2 transition-all duration-300 
        ${ category === props.title ?  
        "bg-opacity-60 border-white" :
        " bg-opacity-40 border-transparent"}
        `}
        onClick={ () => filterHandler(props.title) } >{props.title}</button>

    );

}


