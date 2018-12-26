import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { ALL_CATEGORIES, GET_CATEGORY } from '../../../../redux/actions/category';
import { ALL_MOVIES, RESET_MOVIE } from '../../../../redux/actions/movie';
import { findDOMNode } from 'react-dom';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

import CircularProgress from '@material-ui/core/CircularProgress';

import { styles } from './styles';
import Title from '../../../../components/title';
import GridList from '../../../../components/grid-list';

class CategoryList extends React.Component {
	constructor() {
		super();

		this.handleInfiniteScroll = _.debounce(this.handleInfiniteScroll, 500);
	}

	state = {
		offset: 20,
		count: 0
	};

	isActive = (id) => {
		return id === this.state.categories.id;
	};

	handleInfiniteScroll = () => {
		this.props.dispatch(ALL_MOVIES(this.state.offset, 20));
		this.setState({
			offset: this.state.offset + 20,
			count: this.state.count + 1
		});
	};

	handleSeeMore = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
		this.props.dispatch(RESET_MOVIE());
		this.props.dispatch(ALL_MOVIES(this.state.offset, 20));
		this.setState({
			offset: this.state.offset + 20,
			count: 0
		});
	};

	infiniteScroll = () => {
		const button = findDOMNode(this.element);
		window.addEventListener('scroll', () => {
			const top = button.getBoundingClientRect().top;
			if (top <= 400 && this.state.count < 5) {
				this.handleInfiniteScroll();
			}
		});
	};

	componentDidMount() {
		this.props.dispatch(ALL_MOVIES(0, this.state.offset));
		this.infiniteScroll();
	}

	getRef = (ref) => (this.element = ref);

	render() {
		return (
			<div>
				<Grid container>
					<Grid item xs={12}>
						<Title ref={this.getRef}>New Releases</Title>
					</Grid>
					<Grid item xs={12}>
						<GridList data={this.props.movies.results} />
					</Grid>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Button variant='contained' color='secondary' ref={this.getRef} onClick={this.handleSeeMore}>
							{this.state.count > 4 ? 'See More' : 'Loading ...'}
						</Button>
					</div>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	movies: state.movieReducer
});

const withConnect = withStyles(styles)(CategoryList);
const withThemeCategoryList = withTheme()(withConnect);

export default connect(mapStateToProps)(withThemeCategoryList);
