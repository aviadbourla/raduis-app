import React from 'react';
import ShowMap from './Map/ShowMap';
import ButtonAppBar from './Nav/ButtonAppBar'
import './App.css';
function App() {
  return (
    <div >
      <div className="nav-continer">
        <ButtonAppBar />
      </div>
      <div className="map-continer">
        <ShowMap />
      </div>
    </div>
  );
}

export default App;
