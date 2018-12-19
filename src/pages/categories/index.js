import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Main from './components/main/';
import Popular from '../../components/popular/';
import NewReleases from '../../components/new-releases';
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
				<Popular />
				<NewReleases />
			</div>
		);
	}
}

export default withStyles(styles)(Categories);
