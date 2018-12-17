import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';

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
					<p>Sit fugiat aute aute deserunt laboris ex occaecat excepteur.</p>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
