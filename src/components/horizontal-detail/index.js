import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Animate } from 'react-simple-animate';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import { findDOMNode } from 'react-dom';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import ButtonFavourite from '../button-favourite';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import { styles } from './styles';

class HorizontalDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.item && props.item.id,
			play: false,
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
		if (prevState.play === false && this.state.play === true) {
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
		result = result.slice(0, 100);
		result = result.join(' ');
		return result;
	};

	promise = () =>
		new Promise((resolve, reject) => {
			const root = findDOMNode(this.root);
			root.style.transition = 'all 500ms ease-in-out';
			root.style.opacity = 0;
			root.style.transform = 'translateX(100vh)';
			setTimeout(() => resolve(this), 500);
		});

	handleClose = async () => {
		await this.promise();
		this.props.getFocus(false);
	};

	getColor = (theme, navigation) => {
		if (this.state.navigation === navigation) {
			return theme.palette.text.secondary;
		}
		return theme.palette.text.primary;
	};

	getRefRoot = (ref) => {
		this.root = ref;
	};

	getSlug = (item) => item && item.replace(/\s+/g, '-').toLowerCase() + '-episode-1';

	renderTitle = (item) => {
		const { theme } = this.props;
		return (
			<Animate
				play={this.state.play} // set play true to start the animation
				durationSeconds={0} // how long is the animation duration
				startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
				endStyle={{ transform: 'translate(100px, 0)', opacity: 0 }}
				reverseDurationSeconds={0.3}
				easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
			>
				<CardHeader
					avatar={
						<Avatar aria-label='Recipe' style={{ background: '#42BE61' }}>
							{item.rating === '0' ? 'N/A' : item.rating}
						</Avatar>
					}
					title={<Typography variant='h6'>{item.series}</Typography>}
					subheader={
						<Typography gutterBottom color='secondary'>
							{item.category}
						</Typography>
					}
				/>
			</Animate>
		);
	};

	renderAction = (item) => {
		const { theme } = this.props;
		return (
			<CardActions style={{ width: '100%' }}>
				<Animate
					play={this.state.play} // set play true to start the animation
					durationSeconds={0} // how long is the animation duration
					startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
					endStyle={{ transform: 'translate(100px, 0)', opacity: 0 }}
					reverseDurationSeconds={0.3}
					easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
				>
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
							<Link to={`/movie/${this.getSlug(item.series)}`}>
								<Button variant='contained' color='secondary'>
									<Icon style={{ marginRight: 10 }}>play_arrow</Icon>
									<Typography>Play</Typography>
								</Button>
							</Link>
						</div>
						<div>
							<ButtonFavourite series={item.series} />
						</div>
					</div>
				</Animate>
			</CardActions>
		);
	};

	renderContent = (item) => {
		return (
			<CardContent style={{ width: '100%', flex: '1 0 auto' }}>
				<Animate
					play={this.state.play} // set play true to start the animation
					durationSeconds={0} // how long is the animation duration
					startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
					endStyle={{ transform: 'translate(100px, 0)', opacity: 0 }}
					q
					reverseDurationSeconds={0.3}
					easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
				>
					<Typography gutterBottom style={{ color: '#44CD66' }}>
						Description
					</Typography>

					<Typography gutterBottom color='textPrimary' variant='body2' style={{ maxWidth: '80%' }}>
						{this.getSynopsis(item.description)}
					</Typography>
				</Animate>
			</CardContent>
		);
	};

	render() {
		const { item, classes, theme } = this.props;
		return (
			<div style={{ position: 'relative', width: '80%', margin: 'auto' }} ref={this.getRefRoot}>
				<Card className={classes.root}>
					<CardMedia className={classes.imageContainer}>
						<Animate
							play={this.state.play} // set play true to start the animation
							durationSeconds={0} // how long is the animation duration
							startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
							endStyle={{ transform: 'translate(-100px, 0)', opacity: 0 }}
							reverseDurationSeconds={0.3}
							easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
						>
							<img
								image={item.image_url}
								src={item.image_url}
								alt='#'
								component='img'
								className={classes.image}
							/>
						</Animate>
					</CardMedia>
					<Card
						style={{
							backgroundColor: theme.palette.primary.light,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}
					>
						{this.renderTitle(item)}

						{this.renderContent(item)}
						{this.renderAction(item)}
					</Card>
				</Card>
				<Fab
					style={{
						position: 'absolute',
						top: 20,
						right: 10
					}}
					color='default'
					onClick={this.handleClose}
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
