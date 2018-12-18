import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';

import { styles } from './category-content-styles';

class CategoryContent extends React.Component {
	render() {
		return (
			<CardContent>
				<Typography>{this.props.data.name}</Typography>
			</CardContent>
		);
	}
}

export default withStyles(styles)(CategoryContent);
