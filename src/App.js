import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import Works from './components/pages/Works';
import Terms from './components/pages/Terms';
import Inventors from './components/pages/Inventors';
import Dashboard from './components/pages/Dashboard';
import Contact from './components/pages/Contact';
import Support from './components/pages/Support';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/services' element={<Services/>} />
          <Route path='/sign-up' element={<Login value={1}/>} />
          <Route path='/login' element={<Login value={0}/>}/>
          <Route path='/work' element={<Works/>}/>
          <Route path='/term' element={<Terms/>}/>
          <Route path='/inventors' element={<Inventors/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='support' element={<Support/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
