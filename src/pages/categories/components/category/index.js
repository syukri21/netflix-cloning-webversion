import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';
import CardList from '../../../../components/cardlist';
import _ from 'lodash';
import { data } from '../../../../dummy-data';

class Category extends React.Component {
	state = {
		movies: []
	};

	findCategory = (val) => {
		console.log(val);
		const movies = _.filter(data.movies, (e) => _.includes(e.categoriesId, val));
		console.log(movies);
		this.setState({
			movies: movies
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.category) {
			this.findCategory(nextProps.category);
			console.log(nextProps.category);
		}
	}

	componentDidMount() {
		console.log(this.props.category);
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.state.movies.map((item, key) => <CardList item={item} key={key} />)}
			</div>
		);
	}
}

export default withStyles(styles)(Category);
