import React from 'react';
import ShowMap from './Map/ShowMap';
import ButtonAppBar from './Nav/ButtonAppBar'
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <ButtonAppBar />
        </Grid>
        <Grid item xs={12}>
          <ShowMap />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
