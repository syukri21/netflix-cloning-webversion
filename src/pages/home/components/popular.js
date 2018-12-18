import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Fab } from '@material-ui/core';

import CardHorizontal from '../../../components/card-horizontal/';
import Title from '../../../components/title/';

import { styles } from './popular-styles';
import { data } from '../../../dummy-data';

class Popular extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<Title>Popular</Title>
				<div className={classes.item} style={{ gridGap: 6 }}>
					{data.movies.map((item, key) => (
						<CardHorizontal item={item} key={key} />
					))}
					<Fab
						variant='extended'
						size='small'
						color='secondary'
						style={{ width: '100px', alignSelf: 'center', margin: 'auto' }}
					>
						<Typography variant='caption' style={{ color: 'white' }}>
							Show All
						</Typography>
					</Fab>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Popular);
