import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Coffeecard = (props) => {
	const {title, price, description, avatarUrl, imageUrl} = props;
  	const classes = useStyles();

  	return (
	    <Card>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" src={avatarUrl} className={classes.avatar}/>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={price}
			/>
			<CardMedia style={{height:"150px"}}
		        className={classes.media}
		        image={imageUrl}
		        title={title}
	        />

			<CardContent>
				<Typography variant="body2" component="p">
				{description}
				</Typography>
			</CardContent>

			<CardActions>
				<Button size="small">BUY NOW</Button>
				<Button size="small">OFFER</Button>
			</CardActions>
	    </Card>
  );
}

export default Coffeecard;