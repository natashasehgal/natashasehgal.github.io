import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
    </Router>
  );
}
  
export default App;