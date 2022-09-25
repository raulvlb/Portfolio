import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Site from './views/Site';
import { Repos } from "./components/Repos";
import { Repo } from './views/Repo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Site />} /> 
        <Route path="/repos" element={<Repos/>} /> 
        <Route path="/repos/*" element={<Repo/>} /> 
      </Routes>
    </div>
  );
}

export default App;
