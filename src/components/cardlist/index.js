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
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
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

	closeExpand = () =>
		this.setState({
			expanded: false
		});

	openExpand = () =>
		this.setState({
			expanded: true
		});

	render() {
		const { classes, item, key } = this.props;

		return (
			<Card
				className={classes.card}
				style={{
					backgroundImage: `url(${item.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					...this.props.styles,
					position: 'relative'
				}}
				key={key}
				onMouseEnter={this.openExpand}
				onMouseLeave={this.closeExpand}
			>
				<CardHeader
					color='secondary'
					title={
						<Typography variant='caption' style={{ color: 'white' }}>
							{item.title}
						</Typography>
					}
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
					style={{
						minWidth: '100%',
						bottom: 0,
						position: 'absolute'
					}}
				>
					<div
						style={{
							background: '#0A0B0A88',
							width: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100px'
						}}
					>
						<Button color='secondary' variant='contained'>
							<Icon>play_arrow</Icon>
						</Button>
					</div>
				</Collapse>
			</Card>
		);
	}
}

CardList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardList);
