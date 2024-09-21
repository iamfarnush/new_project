import React from 'react'
import aboutProjects from './aboutProjects'
import AddProjects from './AddProjects'
import Button from "../../Button/Button";
import { useState } from 'react';

const Projects = () => {
    const [active, setActive] = useState(false)
    const HandleClick = (i) => {
        setActive(i)
    }
    return (
        <div>
            <div className="flex justify-center gap-[10px] mr-[200px] mt-[10px]">
                <div>
                    <Button click={() => HandleClick(false)} title="Add project" />
                </div>
                <div>
                    <Button click={() => HandleClick(true)} title="Projects" />
                </div>
            </div>
            {active === false && <AddProjects />}
            {active === true && <aboutProjects />}

        </div>
    )
}

export default Projects