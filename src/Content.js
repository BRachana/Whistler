import React from 'react';
import CoffeeCard from './CoffeeCard';
import {Grid} from '@material-ui/core';
import CoffeeMakerList from './constants';

const Content = () => {

	const getCoffeeMakerData = (coffeeMakerObj) => {
		return(
			<Grid item xs={12} sm={4}>
				<CoffeeCard {...coffeeMakerObj}/>
			</Grid>
		)
	}

	return(
		<Grid container spacing={2}>
			{CoffeeMakerList.map(coffeeMakerObj => getCoffeeMakerData(coffeeMakerObj))}
		</Grid>
		
	)
};

export default Content;