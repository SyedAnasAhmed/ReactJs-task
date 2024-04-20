import React from 'react';
import Schedule from './pages/ScheduleOfEvents'
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Contact from './pages/ContactUs'
import Cast from './pages/CastAttendees'
import { Route, Routes } from 'react-router-dom';
import HomeCard from './Components/ImgTxtCard';
import Disclaimer from './Components/Disclaimer';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/Tickets" element={<Tickets/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cast" element={<Cast/>} />
      </Routes>

      {/* <HomeCard/> */}

      <Disclaimer/>
      <Footer/>


    </>

  );
}

export default App;
