import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { styles } from './index-style';
import { Divider } from '@material-ui/core';

class CardList extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }));
	};

	render() {
		const { classes, item, key } = this.props;

		return (
			<Card
				className={classes.card}
				style={{
					backgroundImage: `url(${item.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					...this.props.styles
				}}
				key={key}
			>
				<CardHeader
					avatar={
						<Avatar aria-label='Recipe' className={classes.avatar}>
							{item.rating}
						</Avatar>
					}
					color='secondary'
					title={<p style={{ color: 'white' }}>{item.title}</p>}
					className={classes.header}
				/>

				<CardActions className={classes.actions} disableActionSpacing>
					<IconButton aria-label='Add to favorites' color='secondary'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='Share' color='secondary'>
						<ShareIcon />
					</IconButton>
					<IconButton
						className={classnames(classes.expand, {
							[classes.expandOpen]: this.state.expanded
						})}
						onClick={this.handleExpandClick}
						aria-expanded={this.state.expanded}
						aria-label='Show more'
						color='secondary'
					>
						<ExpandMoreIcon />
					</IconButton>
				</CardActions>
				<Collapse
					in={this.state.expanded}
					timeout='auto'
					unmountOnExit
					style={{ background: 'white	', minWidth: '100%' }}
				>
					<CardContent style={{ background: 'white	', width: '100%' }}>
						<Typography variant='body1'>Description :</Typography>
						<Divider style={{ marginBottom: 5 }} />
						<Typography variant='body1' paragraph>
							{item.description}
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		);
	}
}

CardList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardList);
