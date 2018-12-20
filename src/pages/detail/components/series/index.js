import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ListMovie from '../../../../components/list-movie';

import { styles } from './styles';
import { data } from '../../../../dummy-data';

class Series extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root}>
				<ListMovie title='Series' data={data} />
			</Grid>
		);
	}
}

export default withStyles(styles)(Series);
