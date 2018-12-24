import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Main from './components/main/';
import HorizontalList from '../../components/horizontal-list';
import Category from './components/category';
import { styles } from './styles';

class Categories extends React.Component {
	state = {
		category: 'Action'
	};

	getCategory = (val) => {
		this.setState({
			category: val
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Main getCategory={this.getCategory} />
				<Category category={this.state.category} />
				<HorizontalList data={this.props.popular} type='ALL_POPULARS' title='Popular' />
				<HorizontalList data={this.props.trending} type='ALL_TRENDINGS' title='New Relases' />
			</div>
		);
	}
}

const withStylesCategories = withStyles(styles)(Categories);

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	trending: state.trendingReducer,
	categories: state.categoryReducer
});
export default connect(mapStateToProps)(withStylesCategories);
