


import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './LandingPage.jsx'
import Contact from './Contact.jsx'
import AboutUs from './views/AboutUs/AboutUs.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <LandingPage/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
)
