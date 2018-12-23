import React from 'react';
import { withStyles, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { ALL_CATEGORIES, GET_CATEGORY } from '../../../../redux/actions/category';
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
		this.props.dispatch(ALL_CATEGORIES());
		this.props.dispatch(GET_CATEGORY('Action', 30));
	}

	scrollToTop = (element) => {
		const offsetTop = findDOMNode(element) && findDOMNode(element).getBoundingClientRect().top;
		const windowY = window.scrollY;
		window.scrollTo({
			top: windowY + offsetTop - 100,
			left: 0,
			behavior: 'smooth'
		});
	};

	renderListCategories = (classes) =>
		this.props.categories.results.map((item, key) => (
			<List className={classes.root} key={key}>
				<ListItem
					button
					onClick={this.handleClick(item.genre)}
					style={{
						background: this.isActive(item.genre)
							? `linear-gradient(to right , #F44336, #F4433655,  #0A0B0A)`
							: '#0A0B0A00'
					}}
				>
					<ListItemText color='red'>
						<Typography color='textPrimary'>{item.genre}</Typography>
					</ListItemText>
				</ListItem>
			</List>
		));

	renderLoadingListCategories = (classes) => {
		if (this.props.categories.results.length === 0) return <CircularProgress />;
		return this.renderListCategories(classes);
	};

	getRef = (ref) => (this.element = ref);

	render() {
		const { classes } = this.props;
		const { categories } = this.state;
		return (
			<div>
				<Grid container>
					<Grid item xs={12} sm={2}>
						<Title ref={this.getRef}>Categories</Title>
						{this.renderLoadingListCategories(classes)}
					</Grid>
					<Grid item xs={12} sm={10}>
						<GridList data={this.props.categories.data} categories={categories} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categoryReducer
});

const withConnect = withStyles(styles)(CategoryList);
const withThemeCategoryList = withTheme()(withConnect);

export default connect(mapStateToProps)(withThemeCategoryList);
