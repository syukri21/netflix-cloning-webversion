import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Slider from 'react-slick';
import Icon from '@material-ui/core/Icon';

import Title from '../title';
import CardHorizontal from '../card-horizontal';

import { styles } from './styles';
import { data } from '../../dummy-data';

class NewRelease extends React.Component {
	state = {
		middle: null
	};

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

	isOddMidle = (key) => this.state.middle !== key;

	getIndexCenter = (val) =>
		this.setState({
			middle: val
		});
	render() {
		const { classes } = this.props;
		var settings = {
			dots: true,
			infinite: true,
			speed: 300,
			centerMode: true,
			focusOnSelect: true,
			afterChange: this.getIndexCenter,
			slidesToShow: this.getSideToShow() - 1,
			slidesToScroll: 1
		};
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Title>New Releases</Title>
				<div
					style={{
						display: 'flex',
						position: 'relative',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<Fab
						size='small'
						variant='extended'
						color='secondary'
						className={classes.arrow}
						onClick={() => this.slide.slickPrev()}
					>
						<Icon style={{ fontSize: 100, color: 'white' }}>arrow_left</Icon>
					</Fab>
					<Slider
						{...settings}
						className={classes.item}
						style={{ gridGap: 5 }}
						arrows={false}
						ref={(ref) => (this.slide = ref)}
						adaptiveHeight={true}
					>
						{data.movies.map((item, key) => (
							<CardHorizontal item={item} key={key} />
						))}
					</Slider>
					<Fab
						size='small'
						variant='extended'
						color='secondary'
						className={classes.arrow}
						onClick={() => this.slide.slickNext()}
					>
						<Icon style={{ fontSize: 100, color: 'white' }}>arrow_right</Icon>
					</Fab>
				</div>
			</div>
		);
	}
}

const withWidthNewRelease = withWidth()(NewRelease);
export default withStyles(styles)(withWidthNewRelease);