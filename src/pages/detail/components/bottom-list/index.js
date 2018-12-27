import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import { styles } from './styles';
import HorizontalList from '../../../../components/horizontal-list';

class Related extends React.Component {
	componentDidMount() {}

	getData() {
		if (this.props.type === 'Related') {
			return this.props.popular.results;
		} else if (this.props.type === 'Episode') {
			return this.props.movie.episode;
		}
	}

	renderLoading(classes) {
		const data = this.getData();
		if (!data) return <CircularProgress className={classes.progress} color='secondary' />;
		return <HorizontalList title={this.props.type} data={{ results: data }} type='ALL_POPULARS' />;
		
	}
	render() {
		const { classes } = this.props;
		return (
			<Grid container className={classes.root}>
				{this.renderLoading(classes)}
			</Grid>
		);
	}
}

const mapStateToProps = (state) => ({
	categories: state.categoryReducer.data,
	popular: state.popularReducer,
	movie: state.movieReducer
});

const withStylesConnect = withStyles(styles)(Related);

export default connect(mapStateToProps)(withStylesConnect);
