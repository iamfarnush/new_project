import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import AddStory from "./AddStory";
import Patient from "./Patient";


export default function AddStatistics() {
    const [active, setActive] = useState(false)
    const HandleClick = (i) => {
        setActive(i)
    }
    return (
        <div>
            <div className="flex justify-center gap-[10px] mr-[200px] mt-[10px]">
                <div>
                    <Button click={() => HandleClick(false)} title="Add story" />
                </div>
                <div>
                    <Button click={() => HandleClick(true)} title="Patient story" />
                </div>
            </div>
            {active === false && <AddStory />}
            {active === true && <Patient />}

        </div>
    )
}