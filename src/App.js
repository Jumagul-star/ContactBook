import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Routers from './Components/Routers';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container pt-4 mt-5 shadow-lg p-3 mb-5 rounded" style={{'backgroundColor': '#3c3b4426'}}>
          <Routers />
        </div>
      </Router>
    </div>
  );
}

export default App;
