import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './index-styles';

class Main extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<h1>iweiws</h1>
			</div>
		);
	}
}

export default withStyles(styles)(Main);
