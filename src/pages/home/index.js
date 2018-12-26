import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Jumbotorn from './components/jumbotron/';
import CategoryList from './components/category-list/';
import HorizontalList from '../../components/horizontal-list';
import Footer from '../../components/footer';
import { styles } from './styles';

const Home = (props) => {
	const { classes, popular, trending } = props;
	console.log(props);

	return (
		<div>
			<div className={classes.jumbotron}>
				<Jumbotorn />
			</div>
			<div className={classes.categories}>
				<div className={classes.containerHomeContent}>
					<HorizontalList title='Popular' data={popular} type='ALL_POPULARS' />
					<HorizontalList title='New Relases' data={trending} type='ALL_TRENDINGS' />
					<div className={classes.categoryList}>
						<CategoryList />
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

const withStylesHome = withStyles(styles)(Home);

const mapStateToProps = (state) => ({
	popular: state.popularReducer,
	trending: state.trendingReducer
});

export default connect(mapStateToProps)(withStylesHome);
