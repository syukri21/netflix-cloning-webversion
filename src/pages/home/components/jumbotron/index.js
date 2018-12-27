import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BackgroundGradient from '../background-gradient/';
import { styles } from './styles';
import _ from 'lodash';

class Jumbotorn extends React.Component {
	renderChip = (item, classes) => (
		<Grid item>
			<Chip label={item} className={classes.chip} color='default' />
		</Grid>
	);

	renderAltFeatured = (item, key, classes) => (
		<div className={classes.container} key={key}>
			<BackgroundGradient />
			<img
				src={item.image_url}
				style={{ filter: 'blur(0)' }}
				className={classNames(classes.images, 'image')}
				alt='#'
			/>
		</div>
	);

	getDescription = (string) => {
		let result = string;
		if (!result) {
			return;
		}
		result = result.split(' ');
		result = result.slice(0, 30);
		result = result.join(' ');
		return result;
	};

	renderFeatured = (item, key, classes) => {
		return (
			<div className={classes.container} key={key}>
				<BackgroundGradient />
				<img src={'assets/jmbtorn.jpg'} className={classNames(classes.images, 'image')} alt='#' />
				<Grid container className={classes.content}>
					<Typography style={{ fontSize: '4vmax', color: 'white' }}>{item.series}</Typography>
					<Grid style={{ marginBottom: 12 }} item xs={12}>
						<Chip
							variant='outlined'
							style={{ color: '#44CD66', borderColor: '#44CD66' }}
							label={`Rating : ${item.rating}`}
						/>
					</Grid>
					<Typography paragraph variant='body1' style={{ color: 'white', maxWidth: 400 }}>
						{this.getDescription(item.description)}
					</Typography>
					<Grid container className={classes.content}>
						{this.renderChip(item.category, classes)}
					</Grid>
					{this.renderButtonActions(item, classes)}
				</Grid>
			</div>
		);
	};

	getSlug = (item) => item.replace(/\s+/g, '-').toLowerCase() + '-episode-1';

	renderButtonActions = (item, classes) => (
		<div className={classes.buttonWraper}>
			<div>
				<Link to={`/movie/${this.getSlug(item.series)}`}>
					<Button variant='contained' color='secondary' size='large' className={classes.button}>
						<Icon className={classes.leftIcon}>play_arrow</Icon>
						Play
					</Button>
				</Link>
			</div>

			<div>
				<Button
					color='primary'
					size='small'
					className={classNames(classes.button, classes.leftIcon, classes.BottomIcon)}
				>
					<Icon className={classes.middleIcon}>favorite</Icon>
					<Typography style={{ color: 'white' }}>Favorites</Typography>
				</Button>
			</div>
		</div>
	);

	componentDidMount() {}

	render() {
		const { classes } = this.props;

		return (
			<Carousel
				showThumbs={false}
				showStatus={false}
				className={classes.container}
				showIndicators={false}
				style={{ width: '100vw' }}
				dynamicHeight={true}
				autoPlay
				interval={5000}
				infiniteLoop
			>
				{this.props.popular.results.length !== 0 &&
					_.take(this.props.popular.results, 3).map((item, key) => this.renderFeatured(item, key, classes))}
			</Carousel>
		);
	}
}

const mapStateToProps = (state) => ({
	popular: state.popularReducer
});

const withConnectJumbotron = connect(mapStateToProps)(Jumbotorn);

export default withStyles(styles)(withConnectJumbotron);
