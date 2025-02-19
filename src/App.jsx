import { HelmetProvider } from 'react-helmet-async'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import 'animate.css'
import Home from './page/Home'
import SignupForm from './page/Signup.jsx'
import ScheduleDemoForm from './page/ContactForm.jsx'
import Investor from './page/Investor.jsx'
import Login from './page/admin/Login.jsx'
import Dashboard from './page/admin/Dashboard.jsx'
import PrivateRoute from './page/admin/PrivateRoute.jsx'
import Header from './page/admin/Header.jsx'
import FAQS from './page/admin/FAQS.jsx'
import OurTeam from './page/admin/OurTeam.jsx'
import WhyBrainBank from './page/admin/WhyBrainBank.jsx'

function App () {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/contactform' element={<ScheduleDemoForm />} />
        <Route path='/investor' element={<Investor />} />
        <Route path='/admin' element={<Login />} />

        <Route
          path='/admin/dashboard'
          element={<PrivateRoute element={<Dashboard />} />}
        />

        <Route
          path='/admin/header'
          element={<PrivateRoute element={<Header />} />}
        />

        <Route
          path='/admin/faqs'
          element={<PrivateRoute element={<FAQS />} />}
        />
        <Route
          path='/admin/team'
          element={<PrivateRoute element={<OurTeam />} />}
        />
        <Route
          path='/admin/whybrainbank'
          element={<PrivateRoute element={<WhyBrainBank />} />}
        />
      </Routes>
    </HelmetProvider>
  )
}

export default App
