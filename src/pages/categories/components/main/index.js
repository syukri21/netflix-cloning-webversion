import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';
import SelectCategories from '../select-categories';

const Main = ({ classes, getCategory }) => (
	<div>
		<div className={classes.root}>
			<Typography className={classes.text} variant='h3'>
				Movies
			</Typography>
			<SelectCategories getCategory={getCategory} />
		</div>
	</div>
);

export default withStyles(styles)(Main);
