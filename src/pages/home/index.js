import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Jumbotorn from './components/jumbotron/';
import CategoryList from './components/category-list/';
import HorizontalList from '../../components/horizontal-list';
import Footer from '../../components/footer';
import { styles } from './styles';
import NetflixSlider from '../../components/netflix-slider';
import Title from '../../components/title';
const Home = (props) => {
	const { classes, popular } = props;

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
