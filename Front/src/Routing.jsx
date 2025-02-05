import { useState } from 'react'
import './Routing.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from '../pages/Landingpage/Landingpage';
import Technicalpage from '../pages/Technicalpage/Technicalpage';
import PrivacyPage from '../components/Privacy/Privacy'
import Refund from '../components/Refund/Refund'
import Termcondition from '../components/Termcondition/Termcondition';
import Productpage from '../pages/Productpage/Productpage';
import Ordercompletepage from '../pages/Ordercompletepage/Ordercompletepage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/technicalsupport" element={<Technicalpage />} />
        <Route path="/privacy-page" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms-and-conditions" element={<Termcondition />} />
        <Route path="/productpage/:id" element={<Productpage />} />
        <Route path="/ordercomplete" element={<Ordercompletepage/>} />
      </Routes>
    </Router>
  )
}

export default App
