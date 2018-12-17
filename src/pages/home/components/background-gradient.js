import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	gradient: {
		background: 'radial-gradient( #03010244, #0B0B0A)',
		zIndex: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});

class BackgroundGradient extends React.Component {
	render() {
		const { classes } = this.props;
		return <div className={classes.gradient} />;
	}
}

export default withStyles(styles)(BackgroundGradient);
