import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import CardHorizontal from '../card-horizontal';
import Title from '../title';
import Icon from '@material-ui/core/Icon';
import { styles } from './styles';
import { data } from '../../dummy-data';
import Slider from 'react-slick';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class Popular extends React.Component {
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
				<Title>Popular</Title>
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
						<Icon>arrow_left</Icon>
					</Fab>
					<Slider
						{...settings}
						className={classes.item}
						style={{ gridGap: 5 }}
						arrows={false}
						ref={(ref) => (this.slide = ref)}
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
						<Icon>arrow_right</Icon>
					</Fab>
				</div>
			</div>
		);
	}
}

const withWidthPopular = withWidth()(Popular);

export default withStyles(styles)(withWidthPopular);
