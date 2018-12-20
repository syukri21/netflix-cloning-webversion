import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Jumbotorn from './components/jumbotron';
import Popular from '../../components/popular';
import CategoryList from './components/category-list/';
import NewReleases from '../../components/new-releases';
import Footer from '../../components/footer';
import { styles } from './styles';

class Home extends React.Component {
	state = {
		height: 0,
		imgHeight: 580,
		footerHeight: 0
	};

	componentDidMount() {}

	render() {
		const { classes } = this.props;
		const { height } = this.state;
		return (
			<div>
				<div className={classes.jumbotron}>
					<Jumbotorn />
				</div>
				<div
					className={classes.categories}
					style={{
						top: height
					}}
				>
					<div
						style={{
							display: 'flex',
							padding: '20px',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column'
						}}
					>
						<NewReleases title='Popular' />
						<NewReleases title='New Relases' />
						<div style={{ width: '100%' }}>
							<CategoryList />
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Home);
