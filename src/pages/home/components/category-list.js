import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { styles } from './category-list-style';
import {
	Grid,
	ListItem,
	List,
	Avatar,
	ListItemText,
	ListItemIcon,
	Icon,
	CardMedia,
	Typography
} from '@material-ui/core';

import { data } from '../../../dummy-data';
import _ from 'lodash';

class CategoryList extends React.Component {
	renderListCategories = (classes) =>
		_.sortBy(data.categories, [ 'name' ]).map((item, key) => (
			<List
				className={classes.root}
				key={item.id}
				style={{ backgroundColor: '#0A0B0A00' }}
			>
				<ListItem button>
					<ListItemIcon>
						<Icon style={{ color: 'white' }}>movie</Icon>
					</ListItemIcon>
					<ListItemText color='red'>
						<Typography style={{ color: 'white' }}>{item.name}</Typography>
					</ListItemText>
				</ListItem>
			</List>
		));

	render() {
		const { classes } = this.props;
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
							subheading='Select your favourite one !'
						/>
						<CardContent>{this.renderListCategories(classes)}</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={9}>
					<Card>
						<CardHeader title='Horor' />
						<CardMedia src='./assets/1.jpg' />
						<CardContent>
							<Typography paragraph variant='caption'>
								Veniam ex ullamco duis tempor ex est reprehenderit laboris
								fugiat reprehenderit amet exercitation.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(CategoryList);
