import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { GET_SEARCH } from '../../redux/actions/search';

import { styles } from './styles';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: this.props.search.keyword || 'd$%^ja'
		};
	}

	componentDidMount() {
		this.props.dispatch(GET_SEARCH(this.state.keyword));
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.search.keyword !== prevState.keyword) {
			nextProps.dispatch(GET_SEARCH(nextProps.search.keyword));
			return { keyword: nextProps.search.keyword };
		} else return null;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<h1 style={{ color: 'white' }}>{this.props.search.keyword}</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	search: state.searchReducer
});

const withConnectSearch = connect(mapStateToProps)(Search);

export default withStyles(styles)(withConnectSearch);
