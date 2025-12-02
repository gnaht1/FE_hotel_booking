import React, { useEffect } from 'react';
import Navbar from './component/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './component/Footer';
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings';
import HotelReg from './component/HotelReg';
import Layout from './pages/HotelOwner/Layout'
import Dashboard from './pages/HotelOwner/Dashboard'
import AddRoom from './pages/HotelOwner/AddRoom'
import ListRoom from './pages/HotelOwner/ListRoom'
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';
import Loader from './component/Loader';  
import About from "./pages/About";
import Blog from "./pages/Blog"; 
import ContactUs from "./pages/ContactUs";
import SafetyInformation from "./pages/SafetyInformation";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  const { showHotelReg } = useAppContext();

  return (
    <div>
      <Toaster />
      {!isOwnerPath && <Navbar />}
      {showHotelReg && <HotelReg />}

      <div className='min-h-[70vh]'>

        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/loader/:nextUrl' element={<Loader />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/safety' element={<SafetyInformation />} />

          {/* OWNER ROUTES */}
          <Route path='/owner' element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
          </Route>

        </Routes>
      </div>

      {/* Footer vẫn luôn hiện */}
      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App;
