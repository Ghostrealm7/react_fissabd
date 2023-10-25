import React, { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom"

import {FaBuilding} from 'react-icons/fa6'
import { IoHome } from "react-icons/io5";
import {IoWifi} from 'react-icons/io5'
import {IoVideocam} from 'react-icons/io5'
import {IoTv} from 'react-icons/io5'
import {FaPhoneAlt} from 'react-icons/fa'
import {FcCheckmark} from 'react-icons/fc'
import {FaHandPointUp} from 'react-icons/fa'
import {SiGoogleforms} from 'react-icons/si'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {GrConnect} from 'react-icons/gr'
import {BsBoxFill} from 'react-icons/bs'


import Home from './components/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
  <>
    <div>
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  </>
  )
}
