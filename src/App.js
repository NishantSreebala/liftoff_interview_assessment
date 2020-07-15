import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    
    <Router>
   <Route exact path = '/' component = {First} />
   </Router>
  );
}

export default App;
