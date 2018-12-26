import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Title from '../title';
import _ from 'lodash';

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		overflow: 'hidden',
		position: 'relative',
		zIndex: 100,
		padding: '0 40px',
		marginBottom: 10,
		backgroundColor: theme.palette.primary.main
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)',
		overflowX: 'scroll',
		overflowY: 'visible',
		backgroundColor: theme.palette.primary.main,
		height: 380
	},
	title: {
		color: theme.palette.primary.light,
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		height: 300,
		width: 200
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
		display: 'flex',
		whiteSpace: 'nowrap'
	},
	bungkus: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		'&:hover': {
			background: 'linear-gradient(to top, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.7) 70%)'
		}
	}
});

function SingleLineGridList(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<div style={{ flex: '1 0 auto' }}>
				<Title>Episode</Title>
			</div>
			<GridList className={classes.gridList}>
				{_.sortBy(props.data, [ (res) => parseInt(res.episode) ]).map((item, key) => (
					<div key={key} style={{ height: 360, position: 'relative' }}>
						<img src={item.image_url} alt={item.title} style={{ height: 350 }} />
						<Link to={`/movie/${item.slug}`} className={classes.bungkus}>
							<Typography variant='title' color='textPrimary' style={{ textAlign: 'center' }}>
								{item.title}
							</Typography>
						</Link>
					</div>
				))}
			</GridList>
		</div>
	);
}

SingleLineGridList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SingleLineGridList);
