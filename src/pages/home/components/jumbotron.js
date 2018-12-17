import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Circle from 'react-circle';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import BackgroundGradient from './background-gradient';
import { data } from '../../../dummy-data';
import { styles } from './jumbotron-styles';

class Jumbotorn extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<Carousel showThumbs={false} showStatus={false}>
					{data.movies.map((item, key) => (
						<div className={classes.container} key={key}>
							<BackgroundGradient />
							<img src={item.image} className={classes.images} alt='#' />
							<Grid container className={classes.content}>
								<Grid className={classes.typograhpy} item>
									<Typography variant='h3' className={classes.title}>
										{item.title}
									</Typography>
								</Grid>
								<Grid item>
									<Circle
										progress={item.rating}
										showPercentageSymbol={false}
										textColor='white'
										size={80}
										textStyle={{
											fontSize: 110,
											lineHeight: 120 // CSSProperties: Custom styling for percentage.
										}}
										progressColor='#E50914'
										bgColor='#0C0F0F88'
									/>
								</Grid>
								<Grid container className={classes.content}>
									{item.categories.map((category, key) => {
										return (
											<Grid item key={category}>
												<Chip
													label={category}
													className={classes.chip}
													color='white'
												/>
											</Grid>
										);
									})}
								</Grid>
								<Grid container className={classes.content}>
									<Typography
										variant='subtitle1'
										gutterBottom
										className={classes.p}
									>
										{item.description}
									</Typography>
								</Grid>
								<Grid container className={classes.content}>
									<Button
										variant='raised'
										color='secondary'
										size='play'
									>
										Play
									</Button>
								</Grid>
							</Grid>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}

export default withStyles(styles)(Jumbotorn);
