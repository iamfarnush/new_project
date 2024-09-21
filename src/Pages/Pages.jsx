import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from "react"
import Layout from '../Layouts/Layout'
import Login from '../Login/Login'
import UpdatePassword from '../UpdatePassword/UpdatePassword'
import Statistics from '../AdminPages/Statistics/Statistics'
import AddStatistics from '../AdminPages/AddStatistics/AddStatistics'
import PatientStory from '../AdminPages/PatientStory/PatientStory'
import Partners from '../AdminPages/Partners/Partners'
import Projects from '../AdminPages/Projects/Projects'

export default function Pages() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/login',
                    element: <Login />
                },
                {
                    path: '/updatepassword',
                    element: <UpdatePassword />
                },
                {
                    path: '/statistics',
                    element: <Statistics />,
                },
                {
                    path: '/addStatistics',
                    element: <AddStatistics />
                },
                {
                    path: '/patientStory',
                    element: <PatientStory />
                },
                {
                    path: '/partners',
                    element: <Partners />
                },
                {
                    path: '/projects',
                    element: <Projects />
                }
              
            ]
        }
    ])

    return <RouterProvider router={router} />
}