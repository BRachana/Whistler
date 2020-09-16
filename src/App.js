import React from 'react';
import {Grid} from '@material-ui/core';
import './App.css';
import Header from './Header';
import Content from './Content';

function App() {
  return (
    <Grid container direction="column">
		<Grid item>
			<Header></Header>
		</Grid>
		<Grid item container>
			<Grid xs={false} sm={2}></Grid> 
			<Grid xs={12} sm={8}> 
			<Content></Content>
			</Grid> 
			<Grid xs={false} sm={2}></Grid> 
		</Grid>
	</Grid>
  );
}
export default App;
