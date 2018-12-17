import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	gradient: {
		background: 'radial-gradient( #03010200,#0B0B0A88, #0B0B0A)',
		zIndex: 200,
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
		console.log(this.props);
		return <div className={classes.gradient} />;
	}
}

export default withStyles(styles)(BackgroundGradient);
