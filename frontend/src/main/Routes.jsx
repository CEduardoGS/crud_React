import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import Usercrud from '../components/users/userCrud'

export default props => 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<Usercrud />} />
        <Route exact path="*" element={<Home />} />
    </Routes>