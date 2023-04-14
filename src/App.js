import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/nav/index';
import Tips from './pages/tips/Tips';
import GiveBack from './pages/giveBack/GiveBack';
import FAQS from './pages/faqs/FAQS';
import AboutUs from './pages/aboutUs/AboutUs';
import Login from './pages/login/Login';
import MeetTheTeam from './pages/meetTheTeam/MeetTheTeam';
import Sidebar from './components/SideBar/index';


function App() {
  return (
<React.Fragment>



<BrowserRouter>
    <Sidebar />
     <Navbar/> 
<Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/aboutUs' element={<AboutUs />}></Route>
  <Route path='/meetTheTeam' element={<MeetTheTeam />}></Route>
  <Route path='/giveBack' element={<GiveBack />}></Route>
  <Route path='/FAQs' element={<FAQS />}></Route>
  <Route path='/tips' element={<Tips />}></Route>
  <Route path='/logIn' element={<Login />}></Route>




</Routes>

</BrowserRouter>
</React.Fragment>

  );
}

export default App;
