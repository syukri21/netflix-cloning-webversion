import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';
import CardList from '../../../../components/cardlist';
import _ from 'lodash';
import { data } from '../../../../dummy-data';
import { Animate } from 'react-simple-animate';

const props = {
	startStyle: {
		transform: 'scale(0.1)',
		opacity: 0
	},
	endStyle: {
		transform: 'scale(1)',
		opacity: 1
	},
	durationSeconds: 0.5,
	easeType: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
};

class Category extends React.Component {
	state = {
		movies: []
	};

	findCategory = (val) => {
		const movies = _.filter(data.movies, (e) => _.includes(e.categoriesId, val));
		this.setState({
			movies: movies
		});
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.category) {
			this.findCategory(nextProps.category);
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{this.state.movies.map((item, key) => (
					<Animate
						play={true}
						{...props}
						render={({ style }) => {
							console.log(style);
							return <CardList item={item} key={key} styles={style} />;
						}}
					/>
				))}
			</div>
		);
	}
}

export default withStyles(styles)(Category);
