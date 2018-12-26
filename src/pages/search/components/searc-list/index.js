import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

import { styles } from './styles';

function SearchList(props) {
	const { classes, item } = props;
	const title = item.title.replace(/\s+/g, '').toLowerCase();

	// const getSlug = (item) => item.replace(/\s+/g, '-').toLowerCase() + '-episode-1';
	return (
		<Card className={classes.card}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography gutterBottom={true} component='h5' style={{ color: 'white' }} variant='h5'>
						{item.title}
					</Typography>
					<div style={{ marginBottom: 10 }}>
						<Chip label={item.category} className={classes.chip} color='default' />
					</div>
					<div>
						<Chip
							variant='outlined'
							style={{ color: '#44CD66', borderColor: '#44CD66' }}
							label={`Rating : ${item.rating}`}
						/>
					</div>
				</CardContent>
				<div className={classes.controls}>
					<Link to={`/movie/${item.slug}`}>
						<Button
							color='secondary'
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center'
							}}
							aria-label='Play/pause'
							variant='contained'
						>
							<PlayArrowIcon className={classes.playIcon} />
						</Button>
					</Link>
				</div>
			</div>
			<CardMedia className={classes.cover} image={item.image_url} title={item.title} />
		</Card>
	);
}

SearchList.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchList);
