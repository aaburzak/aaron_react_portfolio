
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
            </Routes>
        </div>      
      </div>
    </Router>
  );
}

export default App;
