import React from 'react';
import { findDOMNode } from 'react-dom';
import { withStyles } from '@material-ui/core/styles';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';
import Popular from './components/popular';
import CategoryList from './components/category-list/';
import NewRelease from './components/new-release';
import Footer from '../../components/footer';
import { styles } from './index-style';

class Home extends React.Component {
	state = {
		height: 0,
		imgHeight: 580,
		footerHeight: 0
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
				<div
					className={classes.categories}
					style={{
						top: height
					}}
				>
					<div
						style={{
							padding: 30
						}}
					>
						<NewRelease />
						<Popular />
						<CategoryList />
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
