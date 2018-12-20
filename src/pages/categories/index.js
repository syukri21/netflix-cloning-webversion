import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import Main from './components/main/';
import Popular from '../../components/popular/';
import NewReleases from '../../components/horizontal-list';
import Category from './components/category';
import { styles } from './styles';

class Categories extends React.Component {
	state = {
		category: null
	};

	getCategory = (val) =>
		this.setState({
			category: val
		});

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Main getCategory={this.getCategory} />
				<Category category={this.state.category} />
				<Popular data={this.props.popular} />
				<NewReleases data={this.props.popular} />
			</div>
		);
	}
}

const withStylesCategories = withStyles(styles)(Categories);

const mapStateToProps = (state) => ({
	popular: state.popularReducer
});
export default connect(mapStateToProps)(withStylesCategories);
