import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';

import { styles } from './styles';

const Title = ({ classes, variant, children, noLeft, theme }) => (
	<Typography
		variant={variant || 'h4'}
		className={classes.title}
		style={{
			borderLeft: noLeft || `4px solid ${theme.palette.secondary.dark}`
		}}
	>
		{children}
	</Typography>
);

const withThemeTitle = withTheme()(Title);

export default withStyles(styles)(withThemeTitle);
