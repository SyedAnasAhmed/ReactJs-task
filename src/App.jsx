import React from 'react';
import Schedule from './pages/ScheduleOfEvents'
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Contact from './pages/ContactUs'
import Cast from './pages/CastAttendees'
import { Route, Routes } from 'react-router-dom';

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
    </>

  );
}

export default App;
