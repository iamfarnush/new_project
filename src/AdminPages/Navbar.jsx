import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-col font-semibold gap-[10px] mx-[50px] mt-[30px]">
                <NavLink
                    to="/statistics"
                ><button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Statistics</button></NavLink>
                <NavLink
                    to="/patientStory"
                > <button className="w-[200px]  h-[50px] border-[2px] border-black rounded-[5px]">Patient story</button></NavLink>
                <NavLink
                  to="/partners"
                ><button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Partners</button></NavLink>
                <NavLink
                to="/projects"
                ><button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Projects</button></NavLink>
                <NavLink

                > <button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Services</button></NavLink>
                <NavLink

                ><button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Doctors</button></NavLink>
                <NavLink

                ><button className="w-[200px] h-[50px] border-[2px] border-black rounded-[5px]">Report</button></NavLink>
            </div>
        </div>
    )
}