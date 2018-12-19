import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Slider from 'react-slick';

import Title from '../title';
import CardHorizontal from '../card-horizontal';

import { styles } from './index-styles';
import { data } from '../../dummy-data';

class NewRelease extends React.Component {
	getSideToShow = () => {
		if (isWidthUp('lg', this.props.width)) {
			return 6;
		} else if (isWidthUp('md', this.props.width)) {
			return 4;
		} else if (isWidthUp('sm', this.props.width)) {
			return 3;
		} else {
			return 1;
		}
	};

	renderShowAll = () => {
		return (
			<Fab
				variant='extended'
				size='small'
				color='secondary'
				style={{
					width: '100px',
					alignSelf: 'center',
					margin: 'auto',
					marginTop: 10,
					marginLeft: 20
				}}
			>
				<Typography variant='caption' style={{ color: 'white', fontSize: 10 }}>
					Show All
				</Typography>
			</Fab>
		);
	};
	render() {
		const { classes } = this.props;
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: this.getSideToShow(),
			slidesToScroll: this.getSideToShow() - 3 <= 0 ? 1 : this.getSideToShow() - 3
		};
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Title>New Releases</Title>
				<Slider
					centerPadding={23}
					{...settings}
					className={classes.item}
					style={{ gridGap: 5 }}
				>
					{data.movies.map((item, key) => (
						<CardHorizontal item={item} key={key} />
					))}
				</Slider>
			</div>
		);
	}
}

const withWidthNewRelease = withWidth()(NewRelease);
export default withStyles(styles)(withWidthNewRelease);
