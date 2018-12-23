import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import _ from 'lodash';

import { styles } from './styles';
class CardHorizontal extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }));
	};

	closeExpand = () => {
		this.props.getHoverKey(-1);
		this.setState({
			expanded: false
		});
	};

	openExpand = () => {
		this.props.getHoverKey(this.props.theKey);
		this.setState({
			expanded: true
		});
	};

	styleWhileHover = () => {
		if (this.state.expanded) {
			if (this.props.hoverKey === 0 || this.props.hoverKey % 5 === 0)
				return {
					transform: 'translate3d(50px, 0, 0) scaleX(1.5) scaleY(1) '
				};
			if ((this.props.hoverKey + 1) % 5 === 0)
				return {
					transform: 'translate3d(-160px, 0, 0) scaleX(1.5) scaleY(1) '
				};
			return {
				transform: 'scaleX(1.7) scaleY(1)'
			};
		}
		if (this.props.hover) {
			if (this.props.hoverKey === 0 || this.props.hoverKey % 5 === 0) {
				if (this.props.hoverKey < this.props.theKey)
					return {
						transform: 'translate3d(110px, 0, 0) scaleY(0.7) '
					};
			}
			if ((this.props.hoverKey + 1) % 5 === 0) {
				if (this.props.hoverKey > this.props.theKey)
					return {
						transform: 'translate3d(-220px, 0, 0) scaleY(0.7) '
					};
			}

			if (this.props.hoverKey < this.props.theKey)
				return {
					transform: 'translate3d(80px, 0, 0) scaleY(0.7) '
				};
			return {
				transform: 'translate3d(-80px, 0, 0)  scaleY(0.7)'
			};
		}
	};

	renderBackgroundLinear = () => (
		<div
			style={{
				position: 'absolute',
				background: 'linear-gradient(to left, #F4433622, #1E1E1E88)',
				top: 0,
				left: 0,
				bottom: 9,
				right: 0
			}}
		/>
	);

	render() {
		const { classes, item } = this.props;
		console.log('​CardHorizontal -> render -> this.props;', this.props);

		const title = item.title.replace(/\s+/g, '').toLowerCase();
		return (
			<div
				className={classes.card}
				style={{
					backgroundImage: `url(${item.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'relative',
					position: 'relative',
					...this.styleWhileHover()
				}}
				onMouseEnter={this.openExpand}
				onMouseLeave={this.closeExpand}
				key={item.id}
			>
				<div style={{ position: 'relative' }}>
					{/* <CardHeader
						color='secondary'
						title={
							<Typography variant='subtitle1' style={{ color: 'white' }}>
								{item.title}
							</Typography>
						}
						subheader={<Chip variant='outlined' color='secondary' label={item.rating} />}
						className={classes.header}
					/> */}

					{/* <CardActions className={classes.actions} disableActionSpacing>
						<Chip label={item.genre} className={classes.avatar} />
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
					</CardActions> */}
				</div>
				<Fade
					in={this.state.expanded}
					unmountOnExit
					mountOnEnter
					style={{
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						position: 'absolute'
					}}
				>
					<Link
						to={{
							pathname: `/movie/${title}`,
							query: {
								title: item.title,
								id: item.id
							}
						}}
					>
						<div
							style={{
								background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.3))',
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'flex-start',
								boxSizing: 'border-box',
								padding: '0 30px',
								height: 300
							}}
						>
							<div
								style={{
									width: 25,
									height: 25,
									borderRadius: 25,
									border: '1px solid #F44336',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									marginBottom: 5
								}}
							>
								<Icon color='secondary'>play_arrow</Icon>
							</div>

							<Typography variant='subtitle1' style={{ maxWidth: 150 }}>
								{item.title}
							</Typography>
							<Typography variant='caption' style={{ maxWidth: 150, color: '#46D369' }}>
								{item.rating}
							</Typography>
							<Typography variant='caption' style={{ maxWidth: 150 }}>
								<span style={{ color: '#46D369' }}>Genre</span> : {item.genre}
							</Typography>
						</div>
					</Link>
				</Fade>
			</div>
		);
	}
}

CardHorizontal.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardHorizontal);
