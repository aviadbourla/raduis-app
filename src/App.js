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
      <div style={{ position: 'relative' }}>
        <div className="map-continer">
          <ShowMap />
        </div>
      </div>

    </div>
  );
}

export default App;
