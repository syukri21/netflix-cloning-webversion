import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

import { styles } from './styles';

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

	getSlug = (item) => item.replace(/\s+/g, '-').toLowerCase() + '-episode-1';

	render() {
		const { classes, item, key, theme } = this.props;
		return (
			<div>
				<Card
					className={classes.card}
					style={{
						backgroundImage: `url(${item.image_url})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						position: 'relative',
						...this.props.styles
					}}
					key={key}
					onMouseEnter={this.openExpand}
					onMouseLeave={this.closeExpand}
				>
					<Collapse in={this.state.expanded} timeout='auto' unmountOnExit className={classes.collapse}>
						<div className={classes.collapsRoot}>
							<Link to={`/movie/${this.props.needSlug ? this.getSlug(item.series) : item.slug}`}>
								<Button color='secondary' variant='contained'>
									<Icon>play_arrow</Icon>
								</Button>
							</Link>
						</div>
					</Collapse>
				</Card>
				<CardHeader
					color='secondary'
					title={
						<Typography variant='subtitle2' color='textPrimary' style={{ textAlign: 'center' }}>
							{this.props.needSlug ? item.series : item.title}
						</Typography>
					}
					className={classes.header}
				/>
			</div>
		);
	}
}

CardList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(CardList));
