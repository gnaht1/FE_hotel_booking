import React from 'react'
import Navbar from './component/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes('owner');
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App