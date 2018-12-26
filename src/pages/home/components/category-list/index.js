import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { ALL_CATEGORIES, GET_CATEGORY } from '../../../../redux/actions/category';
import { ALL_MOVIES } from '../../../../redux/actions/movie';
import { findDOMNode } from 'react-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { styles } from './styles';
import Title from '../../../../components/title';
import GridList from '../../../../components/grid-list';

class CategoryList extends React.Component {
	state = {
		categories: {
			name: 'Action',
			id: 'Action'
		}
	};

	isActive = (id) => {
		return id === this.state.categories.id;
	};

	handleClick = (item) => () => {
		this.props.dispatch(GET_CATEGORY(item, 30));
		this.setState({
			categories: {
				name: item,
				id: item
			}
		});
		this.scrollToTop(this.element);
	};

	componentDidMount() {
		this.props.dispatch(ALL_MOVIES(0, 30));
	}

	getRef = (ref) => (this.element = ref);

	render() {
		const { classes } = this.props;
		const { movies } = this.state;

		return (
			<div>
				<Grid container>
					<Grid item xs={12}>
						<Title ref={this.getRef}>New Releases</Title>
					</Grid>
					<Grid item xs={12}>
						<GridList data={this.props.movies.results} />
					</Grid>
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
