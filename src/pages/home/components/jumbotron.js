import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { withStyles } from '@material-ui/core/styles';

import BackgroundGradient from './background-gradient';
import { data } from '../../../dummy-data';

const styles = (theme) => ({
	images: {
		width: '100%',
		height: '580px',
		objectFit: 'fill',
		position: 'absolute',
		top: 0,
		left: 0
	},
	container: {
		width: '100%',
		height: '580px',
		overflow: 'hidden',
		position: 'relative'
	},
	backgroundGradient: {}
});

class Jumbotorn extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<Carousel showThumbs={false} showStatus={false}>
					{data.movies.map((item, key) => (
						<div className={classes.container} key={key}>
							<BackgroundGradient />
							<img src={item.image} className={classes.images} />

							<p className='legend'>{item.title}</p>
						</div>
					))}
				</Carousel>
			</div>
		);
	}
}

export default withStyles(styles)(Jumbotorn);
