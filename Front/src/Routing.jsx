import { useState } from 'react'
import './Routing.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from '../pages/Landingpage/Landingpage';
import Technicalpage from '../pages/Technicalpage/Technicalpage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/technicalsupport" element={<Technicalpage />} />
      </Routes>
    </Router>
  )
}

export default App
