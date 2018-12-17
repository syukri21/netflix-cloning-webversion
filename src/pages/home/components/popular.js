import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardList from '../../../components/cardlist';
import { styles } from './popular-style';

class Popular extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Typography variant='display1' style={{ color: 'white' }}>
					Popular
				</Typography>
				<div className={classes.item} style={{ gridGap: 6 }}>
					{[ 10, 1, 2, 3, 4, 5, 6, 7, 8, 8, 7 ].map(() => <CardList />)}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Popular);
