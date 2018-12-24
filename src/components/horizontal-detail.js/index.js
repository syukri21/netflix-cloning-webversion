import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Animate, AnimateKeyframes, AnimateGroup } from 'react-simple-animate';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

import { connect } from 'react-redux';
import { styles } from './styles';

const props = {
	startStyle: { opacity: 0 },
	endStyle: { opacity: 1 }
};

class HorizontalDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.item && props.item.id,
			play: true
		};
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.item) {
			if (nextProps.item.id !== prevState.id) {
				return {
					id: nextProps.item.id,
					play: !prevState.play
				};
			}
			return null;
		} else return null;
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.play) {
			setTimeout(() => {
				this.setState({
					play: false
				});
			}, 500);
		}
	}

	render() {
		const { item, classes } = this.props;
		return (
			<Card className={classes.root} style={{ position: 'relative' }}>
				<CardContent>
					<Animate
						play={this.state.play} // set play true to start the animation
						durationSeconds={0} // how long is the animation duration
						startStyle={{ transform: 'translate(0, 0)', opacity: 1 }}
						endStyle={{ transform: 'translate(100px, 0)', opacity: 0 }}
						reverseDurationSeconds={0.3}
						easeType='cubic-bezier(0.445, 0.05, 0.55, 0.95)'
					>
						<Typography color='textPrimary' variant='h3' gutterBottom>
							{item.title}
						</Typography>
						<Typography gutterBottom style={{ color: '#44CD66' }}>
							{item.rating}
						</Typography>
						<Typography gutterBottom color='secondary'>
							{item.stars}
						</Typography>
						<Typography gutterBottom color='textPrimary' variant='caption' style={{ maxWidth: '50%' }}>
							{item.sinopsis}
						</Typography>
					</Animate>
				</CardContent>
				<Fab
					style={{
						position: 'absolute',
						top: 10,
						right: 10
					}}
					color='default'
					onClick={() => this.props.getFocus(false)}
				>
					<Icon>close</Icon>
				</Fab>
			</Card>
		);
	}
}

const withStylesHorizontalDetail = withStyles(styles)(HorizontalDetail);

export default withStylesHorizontalDetail;
