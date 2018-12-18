import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Slider from 'react-slick';

import CardList from '../../../components/cardlist';
import Title from '../../../components/title';
import CardHorizontal from '../../../components/card-horizontal/';

import { styles } from './new-release-styles';
import { data } from '../../../dummy-data';

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
				<div style={{ alignSelf: 'center' }}>
					<Fab
						size='small'
						color='secondary'
						variant='extended'
						style={{
							width: '100px',
							alignSelf: 'center',
							margin: 'auto',
							marginTop: 10,
							marginLeft: 20
						}}
					>
						<Typography
							variant='button'
							style={{ color: 'white', fontSize: 10 }}
						>
							Show All
						</Typography>
					</Fab>
				</div>
			</div>
		);
	}
}

const withWidthNewRelease = withWidth()(NewRelease);
export default withStyles(styles)(withWidthNewRelease);
