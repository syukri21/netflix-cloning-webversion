import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import Video from './components/video';
import BottomTab from './components/bottom-tab';
import Related from './components/related';
import Series from './components/series';

import { styles, styled } from './style';
import { data } from '../../dummy-data';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null,
			renderStatus: 0,
			query: props.location.query || null
		};
	}

	getRenderState = (renderStatus) => {
		this.setState({ renderStatus });
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.location.query !== prevState.query) {
			return { query: nextProps.location.query };
		} else return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			const results = _.find(data.movies, (e) => e.id === this.state.query.id);
			this.setState({
				movie: results
			});
		}
	}

	componentDidMount() {
		if (!this.state.query) return;
		const results = _.find(data.movies, (e) => e.id === this.state.query.id);
		this.setState({
			movie: results
		});
	}

	renderCategoryList = () =>
		this.state.movie.categories.map((item, key) => (
			<Button
				key={key}
				variant='outlined'
				style={{
					marginRight: 20,
					borderRadius: 10,
					border: '2px solid #F44336'
				}}
			>
				<Typography variant='caption' style={{ color: '#F44336' }}>
					{item}
				</Typography>
			</Button>
		));

	renderMovie = () => {
		return (
			<Grid
				container
				style={{
					position: 'relative',
					zIndex: 100,
					height: '100%',
					padding: '70px 10px 10px 10px',
					width: '100%'
				}}
				spacing={24}
			>
				<Grid item xs={12} sm={4}>
					<Typography gutterBottom variant='h4' style={{ color: '#F44336' }}>
						{this.state.movie && this.state.movie.title}
					</Typography>
					<Typography gutterBottom paragraph variant='subtitle1' style={{ color: 'white' }}>
						{this.state.movie && this.state.movie.description}
					</Typography>
					{this.state.movie && this.renderCategoryList()}
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
					<Video />
				</Grid>
			</Grid>
		);
	};

	renderMain = () => {
		if (this.state.renderStatus === 0) {
			return this.renderMovie();
		}
		if (this.state.renderStatus === 1) {
			return <Series />;
		}
		if (this.state.renderStatus === 2) {
			return <Related />;
		}
	};

	render() {
		const { classes } = this.props;
		if (!this.state.query) return <Redirect to='/' />;
		return (
			<div style={styled.root(this.state.movie)}>
				<div className={classes.backgroundLinear} />
				<div className={classes.roots}>{this.renderMain()}</div>
				<Grid container style={{ display: 'flex', position: 'relative', zIndex: 200 }}>
					<BottomTab getRenderState={this.getRenderState} />
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Detail);
