import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './index-style';

class Title extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Typography variant='h4' className={classes.title}>
				{this.props.children}
			</Typography>
		);
	}
}

export default withStyles(styles)(Title);
