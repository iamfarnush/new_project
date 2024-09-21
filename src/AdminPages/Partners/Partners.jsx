import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import AddPartners from './AddPartners'
import AboutPartners from './AboutPartners'


export default function AddStatistics() {
    const [active, setActive] = useState(false)
    const HandleClick = (i) => {
        setActive(i)
    }
    return (
        <div>
            <div className="flex justify-center gap-[10px] mr-[200px] mt-[10px]">
                <div>
                    <Button click={() => HandleClick(false)} title="Add partner" />
                </div>
                <div>
                    <Button click={() => HandleClick(true)} title="Partners" />
                </div>
            </div>
            {active === false && <AddPartners />}
            {active === true && <AboutPartners />}

        </div>
    )
}