import React from 'react'
import Hero from './pages/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

const App = () => {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Hero/>}/>
        </Route>
      </Routes>
    </Router>
   </>
  )
}

export default App
