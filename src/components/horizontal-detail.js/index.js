import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import MovieIcon from '@material-ui/icons/Movie';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';

import { connect } from 'react-redux';
import { styles } from './styles';

const props = {
	startStyle: { opacity: 0 },
	endStyle: { opacity: 1 }
};

class HorizontalDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.item && props.item.id,
			play: true,
			navigation: 0
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.item) {
			if (nextProps.item.id !== prevState.id) {
				return {
					id: nextProps.item.id,
					play: !prevState.play
				};
			}
			return null;
		} else return null;
	}

	handleChange = (event, navigation) => {
		this.setState({ navigation });
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.play) {
			setTimeout(() => {
				this.setState({
					play: false
				});
			}, 500);
		}
	}

	getSynopsis = (string) => {
		let result = string;
		if (!result) {
			return;
		}
		result = result.split(' ');
		result = result.slice(0, 25);
		result = result.join(' ');
		return result + '  ...';
	};

	getColor = (theme, navigation) => {
		if (this.state.navigation === navigation) {
			return theme.palette.text.secondary;
		}
		return theme.palette.text.primary;
	};

	renderContent = (item) => {
		return (
			<CardContent>
				<Animate
					play={this.state.play} // set play true to start the animation
					durationSeconds={0} // how long is the animation duration
					startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
					endStyle={{ transform: 'translate(100px, 0)', opacity: 0 }}
					reverseDurationSeconds={0.3}
					easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
				>
					<Typography color='textPrimary' variant='h3' gutterBottom>
						{item.title}
					</Typography>
					<Typography gutterBottom style={{ color: '#44CD66' }}>
						{item.rating}
					</Typography>
					<Typography gutterBottom color='secondary'>
						{item.stars}
					</Typography>
					<Typography gutterBottom color='textPrimary' variant='body2' style={{ maxWidth: '50%' }}>
						{this.getSynopsis(item.sinopsis)}
					</Typography>
					<div
						style={{
							display: 'flex',
							width: '100%',
							marginTop: 20
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: 10
							}}
						>
							<Button variant='contained' color='secondary'>
								<Icon style={{ marginRight: 10 }}>play_arrow</Icon>
								<Typography>Play</Typography>
							</Button>
						</div>
						<div>
							<Button color='secondary'>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
										alignItems: 'center'
									}}
								>
									<FavoriteIcon />
									<Typography>Favorites</Typography>
								</div>
							</Button>
						</div>
					</div>
				</Animate>
			</CardContent>
		);
	};

	render() {
		const { item, classes, theme } = this.props;
		console.log('​HorizontalDetail -> render -> this.props.theme', this.props.theme);
		return (
			<div style={{ position: 'relative' }}>
				<Card className={classes.root}>
					{this.renderContent(item)}
					<div className={classes.imageContainer}>
						<Animate
							play={this.state.play} // set play true to start the animation
							durationSeconds={0} // how long is the animation duration
							startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
							endStyle={{ transform: 'translate(-100px, 0)', opacity: 0 }}
							reverseDurationSeconds={0.3}
							easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
						>
							<CardMedia image={item.image} className={classes.image} />
						</Animate>
					</div>
					<CardActions className={classes.cardActions}>
						<BottomNavigation
							className={classes.navigation}
							value={this.state.navigation}
							onChange={this.handleChange}
							showLabels
						>
							<BottomNavigationAction
								style={{ color: this.getColor(theme, 0) }}
								label='Detail'
								icon={<FeaturedPlayListIcon />}
							/>
							<BottomNavigationAction
								style={{ color: this.getColor(theme, 1) }}
								label='Episode'
								icon={<MovieIcon />}
							/>
						</BottomNavigation>
					</CardActions>
				</Card>
				<Fab
					style={{
						position: 'absolute',
						top: 10,
						right: 10
					}}
					color='default'
					onClick={() => this.props.getFocus(false)}
					size='small'
				>
					<Icon>close</Icon>
				</Fab>
			</div>
		);
	}
}

const withStylesHorizontalDetail = withTheme()(withStyles(styles)(HorizontalDetail));

export default withStylesHorizontalDetail;
