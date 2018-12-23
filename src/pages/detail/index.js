import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';

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
			query: props.location.query || null
		};
	}

	getRenderState = (renderStatus) => {
		this.setState({ renderStatus });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.query !== prevState.query) {
			if (nextProps.location.query) {
				nextProps.dispatch(GET_MOVIE(nextProps.location.query.id));
			}
			return { query: nextProps.location.query };
		} else return null;
	}

	componentDidMount() {
		if (!this.state.query) return;
		this.props.dispatch(GET_MOVIE(this.state.query.id));
	}

	renderCategoryList = (classes) => (
		<Button variant='outlined' className={classes.categoriesRoot}>
			<Typography variant='caption' style={{ color: '#F44336' }}>
				{this.props.movie.data[0].genre}
			</Typography>
		</Button>
	);

	renderMovie = (classes) => {
		return (
			<Grid container className={classes.movieRoot} spacing={24}>
				<Grid item xs={12} sm={4}>
					<Typography gutterBottom variant='h4' style={{ color: '#F44336' }}>
						{this.props.movie.data[0] && this.props.movie.data[0].title}
					</Typography>

					<Chip
						style={{ marginBottom: 10 }}
						label={this.props.movie.data[0] && this.props.movie.data[0].rating}
						color='secondary'
					/>
					<Typography gutterBottom paragraph variant='caption' style={{ color: 'white' }}>
						{this.props.movie.data[0] && this.props.movie.data[0].sinopsis}
					</Typography>
					{this.props.movie.data[0] && this.renderCategoryList(classes)}
				</Grid>
				<Grid
					item
					xs={12}
					sm={8}
					style={{
						borderRadius: 10,
						overflow: 'hidden'
					}}
				>
					<Video video={this.props.movie.data[0] && this.props.movie.data[0].video} />
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
					data={this.props.movie.data[0] && this.props.movie.data[0].genre}
					limit={10}
					action={GET_CATEGORY}
				/>
			);
		}
	};

	render() {
		const { classes } = this.props;
		if (!this.state.query) return <Redirect to='/' />;
		return (
			<div style={styled.root(this.props.movie.data[0])}>
				<div
					style={{
						position: 'absolute',
						backgroundImage: `url(${this.props.movie.data[0] && this.props.movie.data[0].image})`,
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

const withConnect = connect(mapStateToProps)(Detail);

export default withStyles(styles)(withConnect);
