import React from 'react';
import ShowMap from './Map/ShowMap';
import ButtonAppBar from './Nav/ButtonAppBar'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    paddingTop: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  mapContiner: {
  }
}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ButtonAppBar />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: '600px', marginTop: '2rem' }}>
            <ShowMap />
          </div>
        </Grid>
      </Grid>
    </div>


  );
}

export default App;
