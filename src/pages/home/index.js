import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Jumbotorn from './components/jumbotron/';
import NewReleases from './components/new-releases/';
import HorizontalList from '../../components/horizontal-list';
import Footer from '../../components/footer';
import { styles } from './styles';
import Title from '../../components/title';

class Home extends React.Component {
	render() {
		const { classes, popular, movie } = this.props;

		return (
			<div>
				<div className={classes.jumbotron}>
					<Jumbotorn />
				</div>

				<div className={classes.categories}>
					<div className={classes.containerHomeContent}>
						<div className={classes.flexStart}>
							<Title>Popular</Title>
						</div>
						<HorizontalList title='Popular' data={popular} type='ALL_POPULARS' />
						<div className={classes.flexStart}>
							<Title>New Releases</Title>
						</div>
						<HorizontalList title='New Releases' data={movie} type='ALL_MOVIES' />
						{/* <div className={classes.categoryList}>
						<NewReleases />
					</div> */}
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}

const withStylesHome = withStyles(styles)(Home);

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	trending: state.trendingReducer,
	movie: state.movieReducer
});

export default connect(mapStateToProps)(withStylesHome);
