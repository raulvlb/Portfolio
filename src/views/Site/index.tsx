import React, { useState } from 'react';
import Home from '../../components/Home/';
import NavBar from '../../components/NavBar/';
import Habilidades from '../../components/Habilidades/'
import { Repos } from '../Repos';

function index() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Habilidades />
      <Repos />
    </div>
  );
}
alert('Site em desenvolvimento')

export default index;
