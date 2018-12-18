import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {
	Grid,
	ListItem,
	List,
	ListItemText,
	ListItemIcon,
	Icon,
	CardMedia,
	Typography
} from '@material-ui/core';

import { styles } from './index-style';
import CardList from '../../../../components/cardlist';
import { data } from '../../../../dummy-data';
import CategoryContent from './category-content';
import _ from 'lodash';

class CategoryList extends React.Component {
	state = {
		categories: {
			name: 'Adventure',
			id: 2
		},
		data: _.filter(data.movies, (e) => _.includes(e.categoriesId, 2))
	};

	isActive = (id) => {
		return id === this.state.categories.id;
	};

	handleClick = (item) => () =>
		this.setState({
			categories: {
				name: item.name,
				id: item.id
			},
			data: _.filter(data.movies, (e) => _.includes(e.categoriesId, item.id))
		});

	renderListCategories = (classes) =>
		_.sortBy(data.categories, [ 'name' ]).map((item, key) => (
			<List
				className={classes.root}
				key={key}
				style={{
					backgroundColor: 'transparent'
				}}
			>
				<ListItem
					button
					onClick={this.handleClick(item)}
					style={{
						backgroundColor: this.isActive(item.id)
							? '#0A0B0A77'
							: '#0A0B0A00'
					}}
				>
					<ListItemIcon>
						<Icon style={{ color: '#0A0B0A' }}>movie</Icon>
					</ListItemIcon>
					<ListItemText color='red'>
						<Typography style={{ color: 'white' }}>{item.name}</Typography>
					</ListItemText>
				</ListItem>
			</List>
		));

	render() {
		const { classes } = this.props;
		const { data, categories } = this.state;
		return (
			<Grid container spacing={16}>
				<Grid item xs={12} md={3}>
					<Card style={{ background: '#C4352Bbb' }}>
						<CardHeader
							title={
								<Typography variant='headline' style={{ color: 'white' }}>
									Categories
								</Typography>
							}
						/>
						<CardContent>{this.renderListCategories(classes)}</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={9}>
					<CategoryContent data={data} categories={categories} />
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(CategoryList);
