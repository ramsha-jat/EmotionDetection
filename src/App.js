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
import View from './components/View';
import RegistrationForm from './components/pages/RegistrationForm';
import UploadEmployeeimage from './components/pages/UploadEmployeeimage';
function App() {
  return (
    <>
    <Router>
    <Navbar></Navbar>
    <Routes>
          <Route path='/' element={<Home/>} exact />
          <Route path='/services' element={<Services/>} />
          <Route path='/sign-up' element={<RegistrationForm />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/work' element={<Works/>}/>
          <Route path='/term' element={<Terms/>}/>
          <Route path='/inventors' element={<Inventors/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/uploadimage' element={<UploadEmployeeimage/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
