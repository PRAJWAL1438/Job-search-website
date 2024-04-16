import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import NaviBar from './NaviBar'; 
import Home from './Pages/Home'
import About from './Pages/About';
import Engineering from './Pages/Engineering';    
import Contact from './Pages/Contact';
import Mangement from './Pages/Mangement'
import Marketing from './Pages/Marketing'

import Formpage from './Pages/Formpage'
import './App.css'

const App = () => {
  return (
    <div className='App'>
    <Router>
        <NaviBar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services1" element={<Engineering/>} />
          <Route path="/services2" element={<Mangement/>} />
          <Route path="/services3" element={<Marketing/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/Button' element={<Formpage/>}  />
        </Routes>
    </Router>
    </div>
  );
};

export default App;
