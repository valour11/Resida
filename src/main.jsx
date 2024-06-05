import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Contact from './Contact.jsx'
import AboutUs from './views/AboutUs/AboutUs.jsx'
// import LandingPage from './LandingPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    <Contact/>
    <AboutUs/>
    {/* <LandingPage/> */}
  </BrowserRouter>
  </React.StrictMode>,
)
