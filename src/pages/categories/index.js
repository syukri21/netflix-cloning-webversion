import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Main from './components/main/';
import Popular from '../../components/popular/';
import NewReleases from '../../components/new-releases';
import { styles } from './index-styles';

class Categories extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Main />
				<Popular />
				<NewReleases />
			</div>
		);
	}
}

export default withStyles(styles)(Categories);
