import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BottomTab from './components/bottom-tab';
import Video from './components/video';
import Related from './components/bottom-list';
import { GET_MOVIE } from '../../redux/actions/movie';
import { styles, styled } from './style';
import { ALL_POPULARS } from '../../redux/actions/popular';
import { GET_CATEGORY } from '../../redux/actions/category';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderStatus: 0,
			query: props.location.pathname.substr(7) || null
		};
	}

	getRenderState = (renderStatus) => {
		this.setState({ renderStatus });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.pathname.substr(7) !== prevState.query) {
			nextProps.dispatch(GET_MOVIE(nextProps.location.pathname.substr(7)));

			return { query: nextProps.location.pathname.substr(7) };
		} else return null;
	}

	componentDidMount() {
		this.props.dispatch(GET_MOVIE(this.props.location.pathname.substr(7)));
	}

	renderCategoryList = (classes, theme) => (
		<Button variant='outlined' className={classes.categoriesRoot}>
			<Typography variant='caption' style={{ color: '#44CD66' }}>
				{this.props.movie.data.category}
			</Typography>
		</Button>
	);

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
						<CardContent>
							<Typography
								gutterBottom
								variant='h4'
								style={{
									color: theme.palette.text.primary,
									borderBottom: '2px solid white',
									paddingBottom: '10px',
									marginBottom: '20px'
								}}
							>
								{this.props.movie.data && this.props.movie.data.title}
							</Typography>
							<Chip
								style={{ marginBottom: 10 }}
								label={`Rating : ${this.props.movie.data.rating === '0'
									? 'N/A'
									: this.props.movie.data.rating}`}
								color='secondary'
							/>
							<Typography
								gutterBottom
								variant='subtitle1'
								style={{
									color: theme.palette.text.primary,
									borderBottom: '2px solid white',
									paddingBottom: '10px',
									marginBottom: '20px'
								}}
							>
								Series : {this.props.movie.data && this.props.movie.data.series}
							</Typography>
							<Typography
								gutterBottom
								paragraph
								variant='caption'
								style={{ color: theme.palette.text.primary, maxWidth: 500 }}
							>
								{this.props.movie.data && this.props.movie.data.description}
							</Typography>
							{this.props.movie.data && this.renderCategoryList(classes, theme)}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	};

	renderSlide = () => {
		if (this.state.renderStatus === 0) {
			return <Related type='Popular' action={ALL_POPULARS} />;
		}
		if (this.state.renderStatus === 1) {
			return (
				<Related
					type='Related'
					data={this.props.movie.data && this.props.movie.data.category}
					limit={10}
					action={GET_CATEGORY}
				/>
			);
		}
	};

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
				<div>{this.renderMovie(classes)}</div>
				<div className={classes.roots}>{this.renderSlide()}</div>
				<Grid container style={{ display: 'flex', position: 'relative', zIndex: 200 }}>
					<BottomTab getRenderState={this.getRenderState} />
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movie: state.movieReducer
});

const withConnect = withRouter(connect(mapStateToProps)(Detail));
const withThemeDetail = withTheme()(withConnect);

export default withStyles(styles)(withThemeDetail);
