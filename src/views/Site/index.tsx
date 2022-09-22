import React from 'react';
import Home from '../../components/Home/';
import NavBar from '../../components/NavBar/';
import Habilidades from '../../components/Habilidades/'

function index() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Habilidades />
    </div>
  );
}

export default index;
