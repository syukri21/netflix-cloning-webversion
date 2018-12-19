import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { styles } from './index-styles';
import SelectCategories from '../select-categories';

class Main extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.root}>
					<Typography className={classes.text} variant='display2'>
						Movies
					</Typography>
					<SelectCategories />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Main);
