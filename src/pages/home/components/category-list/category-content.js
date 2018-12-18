import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';

import { styles } from './category-content-styles';
import CardList from '../../../../components/cardlist';
import Title from '../../../../components/title/';

class CategoryContent extends React.Component {
	render() {
		const { data, classes, categories } = this.props;
		return (
			<CardContent>
				<Title>{categories.name}</Title>
				<div className={classes.item} style={{ gridGap: 6 }}>
					{data.map((item, key) => <CardList item={item} key={key} />)}
				</div>
			</CardContent>
		);
	}
}

export default withStyles(styles)(CategoryContent);