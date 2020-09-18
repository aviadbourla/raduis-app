import React from 'react';
import ShowMap from './Map/ShowMap';
import './App.css';
import ButtonAppBar from './Nav/ButtonAppBar'
import BootStrap from './NavBar/BootStrapNav'

function App() {
  return (
    <div>
      <BootStrap />
      <ShowMap />
    </div>
  );
}

export default App;
