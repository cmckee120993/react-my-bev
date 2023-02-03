import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// hamburger menu
// styling for whole app
import './App.css';

// components that persist on the app
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Nav';

// page specific imports
import Home from './pages/Home';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Seasonal from './pages/Seasonal';

function App() {
  return (
    <Router>
      <>
        <Navbar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        {/* pagewrap for the hamburger menu */}
        <div id='page-wrap'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/seasonal' element={<Seasonal />} />
            <Route path='*' element={<h1>Wrong page!</h1>} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
