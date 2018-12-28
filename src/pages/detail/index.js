import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import SingleLineGridList from '../../components/common-horizontal-list';
import ShimmerHorizontalList from '../../components/shimmer-horizontal-list';
import Paper from '@material-ui/core/Paper';
import { FacebookProvider, CommentsCount } from 'react-facebook';
import Icon from '@material-ui/core/Icon';
import ButtonFavorite from '../../components/button-favourite';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BottomTab from './components/bottom-tab';
import Video from './components/video';
import BottomList from './components/bottom-list';
import { GET_MOVIE, GET_EPISODE } from '../../redux/actions/movie';
import { styles, styled } from './style';
import { ALL_POPULARS } from '../../redux/actions/popular';
import axios from 'axios';
import { ip } from '../../configip';
class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderStatus: 0,
			query: props.location.pathname.substr(7) || null,
			url: `http://animeflix.id${this.props.location.pathname}`
		};
	}

	getRenderState = (renderStatus) => {
		this.setState({ renderStatus });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.pathname.substr(7) !== prevState.query) {
			nextProps.dispatch(GET_MOVIE(nextProps.location.pathname.substr(7)));
			axios.get(`${ip}video/${nextProps.location.pathname.substr(7)}`).then((res) => {
				nextProps.dispatch(GET_EPISODE(res.data.series));
			});

			return {
				query: nextProps.location.pathname.substr(7),
				url: `http://animeflix.id${nextProps.location.pathname}`
			};
		} else return null;
	}

	async componentDidMount() {
		await this.props.dispatch(GET_MOVIE(this.props.location.pathname.substr(7)));
		this.props.dispatch(GET_EPISODE(this.props.movie.data.series));
	}

	renderCategoryList = (classes, theme) => {
		return (
			this.props.movie.data.category &&
			this.props.movie.data.category.split(',').map((data, key) => (
				<div key={key} className={classes.rootChip}>
					{/* <Button variant='outlined' className={classes.categoriesRoot}>
						<Typography variant='caption' style={{ color: '#44CD66' }}>
							{data}
						</Typography>
					</Button> */}
					<Chip label={data} className={classes.chip} />
				</div>
			))
		);
	};

	renderMovie = (classes) => {
		const { theme } = this.props;
		return (
			<Grid container className={classes.movieRoot} spacing={24}>
				<Grid
					item
					xs={12}
					sm={12}
					style={{
						borderRadius: 10,
						overflow: 'hidden',
						minHeight: 500,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<Video video={this.props.movie.data && this.props.movie.data.video_url} />
				</Grid>
				<Grid item xs={12} sm={12}>
					<Card className={classes.cardDetail}>
						<CardMedia
							image={this.props.movie.data.image_url || '#'}
							alt='#'
							className={classes.cardImage}
							component='img'
						/>
						<CardContent
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								flexDirection: 'column'
							}}
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'flex-start',
									flexDirection: 'column'
								}}
							>
								<Typography
									gutterBottom
									variant='h4'
									style={{
										color: theme.palette.text.primary,
										marginBottom: theme.spacing.unit,
										textAlign: 'left'
									}}
								>
									{this.props.movie.data && this.props.movie.data.title}
								</Typography>
								<Chip
									style={{
										color: '#44CD66',
										borderColor: '#44CD66',
										marginBottom: theme.spacing.unit
									}}
									label={`Rating : ${this.props.movie.data.rating === '0'
										? 'N/A'
										: this.props.movie.data.rating}`}
									variant='outlined'
								/>
								<Typography
									gutterBottom
									variant='subtitle1'
									style={{
										color: theme.palette.text.primary
									}}
								>
									Series : {this.props.movie.data && this.props.movie.data.series}
								</Typography>
								<Typography
									gutterBottom
									paragraph
									variant='caption'
									style={{ color: theme.palette.text.primary, textAlign: 'left' }}
								>
									{this.props.movie.data && this.props.movie.data.description}
								</Typography>
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										justifyContent: 'flex-start'
									}}
								>
									{this.props.movie.data && this.renderCategoryList(classes, theme)}
								</div>
								<ButtonFavorite series={this.props.movie.data && this.props.movie.data.series} />
							</div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	};

	renderSlide = () => {
		if (this.state.renderStatus === 0) {
			if (this.props.movie.episode.length === 0)
				return (
					<div style={{ width: '100%', height: 300 }}>
						<ShimmerHorizontalList />;
					</div>
				);
			return (
				<BottomList
					type='Episode'
					movie={{ episode: this.props.movie.episode }}
					action={ALL_POPULARS}
					limit={10}
				/>
			);
		}
		if (this.state.renderStatus === 1) {
			if (this.props.movie.episode.length === 0)
				return (
					<div style={{ width: '100%', height: 300 }}>
						<ShimmerHorizontalList />;
					</div>
				);
			return <BottomList type='Related' action={ALL_POPULARS} limit={10} />;
		}
	};

	getComment = (url) => (
		<FacebookProvider appId='1167820306704872' style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
			<CommentsCount href={url} />
			<div
				className='fb-comments'
				data-href={url}
				data-numposts='5'
				style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
				width='900'
				data-colorscheme='dark'
				fb-iframe-plugin-query={`app_id=1167820306704872&color_scheme=dark&container_width=1249&height=100&href=${url}&locale=id_ID&numposts=5&sdk=joey&version=v3.2&width=900`}
			/>
		</FacebookProvider>
	);
	render() {
		const { classes } = this.props;

		return (
			<div style={styled.root(this.props.movie.data)}>
				<div
					style={{
						position: 'absolute',
						backgroundImage: `url(${this.props.movie.data && this.props.movie.data.image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						top: '0',
						left: '0',
						right: '0',
						bottom: '0',
						zIndex: '1',
						filter: 'blur(20px)'
					}}
				/>
				<div className={classes.backgroundLinear} />
				<div style={{ position: 'relative', zIndex: 100 }}>{this.renderMovie(classes)}</div>
				<div className={classes.roots}>{this.renderSlide()}</div>
				<Grid container style={{ display: 'flex', position: 'relative', zIndex: 200 }}>
					<BottomTab getRenderState={this.getRenderState} />
				</Grid>
				<Paper className={classes.paper} style={{ backgroundColor: 'transparent' }}>
					{this.getComment(this.state.url)}
				</Paper>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movie: state.movieReducer,
	popular: state.popularReducer
});

const withConnect = withRouter(connect(mapStateToProps)(Detail));
const withThemeDetail = withTheme()(withConnect);

export default withStyles(styles)(withThemeDetail);
