import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { styles } from './index-styles';

class Footer extends React.Component {
	render() {
		return (
			<Grid container style={{ height: 300 }}>
				<Grid
					item
					xs={12}
					sm={3}
					style={{ backgroundColor: '#141414', height: 300 }}
				>
					dsdsdssss
				</Grid>
				<Grid item xs={12} sm={9} style={{ backgroundColor: '#232426' }}>
					sdsdsdsd
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Footer);
