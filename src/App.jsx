// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import SemesterForm from './components/datascreen'

function App() {

  return (
    <>

    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/data' element={<SemesterForm />} />
          </Routes>
    </Router>

    </>
  )
}

export default App
