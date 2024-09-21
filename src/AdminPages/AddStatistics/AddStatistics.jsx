import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import InputStatistic from "./InputStatistic";
import StatisticBody from "./StatisticBody";

export default function AddStatistics() {
    const [active, setActive] = useState(false)
    const HandleClick = (i) => {
        setActive(i)
    }
    return (
        <div>
            <div className="flex justify-center gap-[10px] mr-[200px] mt-[10px]">
                <div>
                    <Button click={() => HandleClick(false)} title="Add statistics" />
                </div>
                <div>
                    <Button click={() => HandleClick(true)} title="Statistics" />
                </div>
            </div>
            {active === false && <InputStatistic />}
            {active === true && <StatisticBody />}

        </div>
    )
}