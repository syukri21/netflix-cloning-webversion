import React from 'react';
import { findDOMNode } from 'react-dom';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';
import Popular from './components/popular';

import { styles } from './index-style';
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {
	state = {
		height: 0
	};

	getRefHeight = (ref) => {
		this.setState({
			height: findDOMNode(ref).offsetHeight
		});
	};

	render() {
		const { classes } = this.props;
		const { height } = this.state;
		return (
			<div>
				<Header />
				<div className={classes.jumbotron} ref={this.getRefHeight}>
					<Jumbotorn />
				</div>
				<div className={classes.categories} style={{ top: height }}>
					<Popular />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
