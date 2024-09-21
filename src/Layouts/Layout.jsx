import {Outlet} from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../AdminPages/Navbar'
import React from "react"

export default function Layout(){
    return(
       
     
        <div>
        <Header />
         <div className='flex justify-between mr-[450px]'>
         <Navbar />
         <Outlet />
         </div>
        </div>
    )
}