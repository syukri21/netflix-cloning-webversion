import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

import CardList from '../../../components/cardlist';
import { styles } from './new-release-styles';

import { data } from '../../../dummy-data';

class NewRelease extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Typography variant='h4' style={{ color: 'white' }}>
					New Releases
				</Typography>

				<div className={classes.item} style={{ gridGap: 6 }}>
					{data.movies.map((item, key) => <CardList item={item} key={key} />)}
					<Button
						variant='extendedFab'
						size='small'
						color='secondary'
						style={{ width: '100px', alignSelf: 'center', margin: 'auto' }}
					>
						<Typography variant='caption' style={{ color: 'white' }}>
							Show All
						</Typography>
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(NewRelease);
