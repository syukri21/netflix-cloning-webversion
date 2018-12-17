import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Circle from 'react-circle';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

import BackgroundGradient from './background-gradient';
import { data } from '../../../dummy-data';
import { styles } from './jumbotron-styles';

class Jumbotorn extends React.Component {
	renderChip = (item, classes) =>
		item.categories.map((category, key) => (
			<Grid item key={category}>
				<Chip label={category} className={classes.chip} color='default' />
				{key !== item.categories.map.length && (
					<span className={classes.p}>.</span>
				)}
			</Grid>
		));

	renderButtonActions = (classes) => (
		<Grid container className={classes.content}>
			<Grid container className={classes.content}>
				<Button
					variant='contained'
					color='secondary'
					size='large'
					className={classes.button}
				>
					<Icon className={classes.leftIcon}>play_arrow</Icon>
					Play
				</Button>
			</Grid>
			<Grid container className={classes.content}>
				<Button
					color='primary'
					size='small'
					className={classNames(
						classes.button,
						classes.leftIcon,
						classes.BottomIcon
					)}
				>
					<Icon className={classes.middleIcon}>info</Icon>
					<Typography style={{ color: 'white' }}>Info</Typography>
				</Button>
			</Grid>
		</Grid>
	);

	render() {
		const { classes } = this.props;
		return (
			<Carousel
				showThumbs={false}
				showStatus={false}
				className={classes.container}
				showIndicators={false}
				style={{ width: '100%', backgroundColor: 'red' }}
			>
				{data.movies.map((item, key) => (
					<div className={classes.container} key={key}>
						<BackgroundGradient />
						<img src={item.image} className={classes.images} alt='#' />

						<Grid container className={classes.content}>
							<Typography style={{ fontSize: '4vmax', color: 'white' }}>
								{item.title}
							</Typography>
							<Grid item xs={12}>
								<Circle
									progress={item.rating}
									showPercentageSymbol={false}
									textColor='white'
									size={80}
									textStyle={{
										fontSize: 110,
										lineHeight: 120
									}}
									progressColor='#E50914'
									bgColor='#0C0F0F'
								/>
							</Grid>

							<Grid container className={classes.content}>
								{this.renderChip(item, classes)}
							</Grid>
							{this.renderButtonActions(classes)}
						</Grid>
					</div>
				))}
			</Carousel>
		);
	}
}

export default withStyles(styles)(Jumbotorn);
