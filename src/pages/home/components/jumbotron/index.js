import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ButtonFavorite from '../../../../components/button-favourite';

import BackgroundGradient from '../background-gradient/';
import { ALL_FAVOURITES, DELETE_FAVOURIT, ADD_FAVOURITE } from '../../../../redux/actions/favourites';
import fetchFavourites from '../../../../utils/fetchFavourites';

import { styles } from './styles';
import _ from 'lodash';

class Jumbotorn extends React.Component {
	state = {
		openModal: false
	};

	renderChip = (item, classes) => {
		return item.split(',').map((e, key) => <Chip key={key} label={e} className={classes.chip} color='default' />);
	};

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

	handleFavorite = (series) => async () => {
		const token = await sessionStorage.getItem('token');

		if (token === 'null' || token === '' || token === undefined) {
			return this.props.history.push('/login');
		}
		return this.props.dispatch(ADD_FAVOURITE(series, token));
	};

	renderFeatured = (item, key, classes) => {
		return (
			<div className={classes.container} key={key}>
				<BackgroundGradient />
				<img src={'assets/jmbtorn.jpg'} className={classNames(classes.images, 'image')} alt='#' />
				<Grid container className={classes.content}>
					<Typography style={{ fontSize: '4vmax', color: 'white' }}>{item.series}</Typography>
					<Chip
						variant='outlined'
						style={{ color: '#44CD66', borderColor: '#44CD66', marginBottom: 15 }}
						label={`Rating : ${item.rating}`}
					/>
					<Typography paragraph variant='body1' style={{ color: 'white', maxWidth: 400, textAlign: 'left' }}>
						{this.getDescription(item.description)}
					</Typography>
					<div style={{ display: 'flex' }}>{this.renderChip(item.category, classes)}</div>
					{this.renderButtonActions(item, classes)}
				</Grid>
			</div>
		);
	};

	getSlug = (item) => item.replace(/\s+/g, '-').toLowerCase() + '-episode-1';

	cekFavorites = (series) => {
		const data = _.find(this.props.favorite.results, (e) => e.name_series === series);
		return _.find(data);
	};

	renderButtonActions = (item, classes) => {
		const { theme } = this.props;
		return (
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
					{/* <Button
						color={this.cekFavorites(item.series) ? 'secondary' : 'primary'}
						size='small'
						className={classNames(classes.button, classes.leftIcon, classes.BottomIcon)}
						onClick={this.handleFavorite(item.series)}
					>
						<Icon
							className={classes.middleIcon}
							style={{ color: this.cekFavorites(item.series) ? theme.palette.secondary.light : 'white' }}
						>
							favorite
						</Icon>
						<Typography style={{ color: 'white' }}>Favorites</Typography>
					</Button> */}

					<ButtonFavorite series={item.series} classes={classes} favorite={this.props.favorite} />
				</div>
			</div>
		);
	};

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
				showArrows={false}
			>
				{this.props.popular.results.length !== 0 &&
					_.take(this.props.popular.results, 1).map((item, key) => this.renderFeatured(item, key, classes))}
			</Carousel>
		);
	}
}

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	favorite: state.favouriteReducer
});

const withConnectJumbotron = withTheme()(connect(mapStateToProps)(Jumbotorn));

export default withRouter(withStyles(styles)(withConnectJumbotron));
