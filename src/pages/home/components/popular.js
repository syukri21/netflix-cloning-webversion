import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Carousel } from 'react-responsive-carousel';

import CardList from '../../../components/cardlist';
import { styles } from './popular-styles';
import { Button } from '@material-ui/core';

import { data } from '../../../dummy-data';

class Popular extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Typography variant='h4' style={{ color: 'white' }}>
					Popular
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

export default withStyles(styles)(Popular);
