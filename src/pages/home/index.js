import React from 'react';
import { findDOMNode } from 'react-dom';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';
import Popular from './components/popular';
import NewRelease from './components/new-release';

import { styles } from './index-style';
import { withStyles } from '@material-ui/core/styles';

class Home extends React.Component {
	state = {
		height: 0,
		imgHeight: 580
	};

	getRefHeight = (ref) => {
		this.setState({
			height: findDOMNode(ref).offsetHeight
		});
	};

	componentDidMount() {}

	render() {
		const { classes } = this.props;
		const { height } = this.state;
		return (
			<div>
				<Header />
				<div className={classes.jumbotron} ref={this.getRefHeight}>
					<Jumbotorn imgHeight={this.state.height} />
				</div>
				<div className={classes.categories} style={{ top: height }}>
					<NewRelease />
					<Popular />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
