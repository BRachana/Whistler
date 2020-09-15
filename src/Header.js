import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import AcUnitIcon from '@material-ui/icons/AcUnitOutlined';




const useStyles = makeStyles( () => ({
	TypographyStyles: {
		flex:1
	}
}));

const Header = () => {
	const classes = useStyles();
	return(
		<AppBar position="static">
			<Toolbar>
				<Typography className={classes.TypographyStyles}> Header </Typography>
				<AcUnitIcon></AcUnitIcon>
			</Toolbar>
		</AppBar>
	)
};

export default Header;