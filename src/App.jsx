// import { Route, Router, Routes, } from 'react-router-dom'
// import './App.css'
// import Schedule from './pages/ScheduleOfEvents'
// import Home from './pages/Home'
// import Tickets from './pages/Tickets'
// import Contact from './pages/ContactUs'
// import Cast from './pages/CastAttendees'

// function App() {

//   return (
//     <>
//       <Router>
//         {/* <Routes> */}
//           <Route path="/" ><Home /></Route>
//         {/* </Routes> */}
//         {/* <Routes> */}
//           <Route path="/Schedule" ><Schedule /></Route>
//         {/* </Routes> */}
//         {/* <Routes> */}
//           <Route path="/Tickets" ><Tickets /></Route>
//         {/* </Routes> */}
//         {/* <Routes> */}
//           <Route path="/Contact" ><Contact /></Route>
//         {/* </Routes> */}
//         {/* <Routes> */}
//           <Route path="/Cast" ><Cast /></Route>
//         {/* </Routes> */}
//       </Router>



//     </>
//   )
// }

// export default App


import React from 'react';
// import { BrowserRouter as  Route, Routes, } from 'react-router-dom';
import Schedule from './pages/ScheduleOfEvents'
import Home from './pages/Home'
import Tickets from './pages/Tickets'
import Contact from './pages/ContactUs'
import Cast from './pages/CastAttendees'
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';

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

        {/* <MyNavbar/>  */}



    </>

  );
}

export default App;
