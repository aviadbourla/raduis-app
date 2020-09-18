import React from 'react';
import ShowMap from './Map/ShowMap';
import './App.css';
import ButtonAppBar from './Nav/ButtonAppBar'


function App() {
  return (
    <div>
      <ButtonAppBar />
      <ShowMap />
    </div>
  );
}

export default App;
