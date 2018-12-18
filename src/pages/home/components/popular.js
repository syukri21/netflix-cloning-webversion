import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Fab } from '@material-ui/core';

import CardHorizontal from '../../../components/card-horizontal/';
import Title from '../../../components/title/';

import { styles } from './popular-styles';
import { data } from '../../../dummy-data';
import Slider from 'react-slick';

var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1
};
class Popular extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Title>Popular</Title>
				<div className={classes.item} style={{ gridGap: 6 }}>
					{data.movies.map((item, key) => (
						<CardHorizontal item={item} key={key} />
					))}
				</div>

				<Fab
					variant='extended'
					size='small'
					color='secondary'
					style={{
						width: '100px',
						alignSelf: 'center',
						margin: 'auto',
						marginTop: 10
					}}
				>
					<Typography variant='caption' style={{ color: 'white' }}>
						Show All
					</Typography>
				</Fab>
				<Slider
					centerPadding={23}
					{...settings}
					className={classes.item}
					style={{ gridGap: 6 }}
				>
					{data.movies.map((item, key) => (
						<CardHorizontal item={item} key={key} />
					))}
				</Slider>
			</div>
		);
	}
}

export default withStyles(styles)(Popular);
