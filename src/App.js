import React from 'react';
import ShowMap from './Map/ShowMap';
import ButtonAppBar from './Nav/ButtonAppBar'
import './App.css';

function App() {
  return (
    <div className="main-continer">
      <div className="nav-continer">
        <ButtonAppBar />
      </div>
      <div style={{ height: '40px', position: 'relative' }}>
      </div>
      <div className="map-continer">
        <ShowMap />
      </div>
    </div>
  );
}

export default App;
