import React from "react";
import { NavLink } from "react-router-dom";


export default function Button({title, click}){
    return(
        <div className="flex justify-center pt-[20px]">
         <button onClick={click} className="py-[5px] px-[40px] border-[2px] border-black rounded-[5px] ">{title}</button>
        </div>
    )
}