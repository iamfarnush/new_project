import React from "react";

export default function Title({title}){
    return(
        <div className="flex justify-center text-[25px] font-semibold py-[30px]">
          <h2 className="title">{title}</h2>
        </div>
    )
}