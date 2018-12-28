import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { findDOMNode } from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

import { styles } from './styles';
class CardHorizontal extends React.Component {
	state = {
		expanded: false,
		right: null
	};

	handleExpandClick = () => {
		this.setState((state) => ({ expanded: !state.expanded }));
	};

	handleButtonArrow = () => {
		this.props.getFocus(this.props.item);
	};

	closeExpand = () => {
		this.props.getHoverKey(-1);
		this.setState({
			expanded: false
		});
		this.props.getHasExpand(false);
	};

	openExpand = () => {
		this.props.getHoverKey(this.props.theKey);
		this.setState({
			expanded: true
		});
		this.props.getHasExpand(true);
		if (this.props.hasFocus) {
			this.props.getFocus(this.props.item);
		}
	};

	styleWhileHover = () => {
		if (this.props.hasFocus) {
			return;
		}

		// slide  yang di hover
		if (this.state.expanded) {
			// ukur jarak dari kiri dan kanan
			const left = window.innerWidth - this.div.getBoundingClientRect().left;
			const right = this.div.getBoundingClientRect().right;

			// slide paling kanan
			if (right < 300) {
				return {
					transform: 'translate3d(40px, 0, 0) scaleX(1.5) scaleY(1.5) '
				};
			}

			// slide paling kiri
			if (left < 300) {
				return {
					transform: `translate3d(-${80}px, 0, 0) scaleX(1.5) scaleY(1.5)`
				};
			}

			// slide yang di tengah
			return {
				transform: 'scaleX(1.5) scaleY(1.5)'
			};
		}

		// slide kalau sedang ada yang di hover
		if (this.props.hover && this.props.hasExpand) {
			const lefti = window.innerWidth - this.div.getBoundingClientRect().left;
			const righti = this.div.getBoundingClientRect().right;
			// slide paling kiri
			if (this.props.hoverKey === 0 || this.props.hoverKey % 7 === 0) {
				// if (righti < 300) {
				if (this.props.hoverKey < this.props.theKey)
					return {
						transform: 'translate3d(80px, 0, 0) scaleY(1) '
					};
			}

			// slide paling kanan
			if ((this.props.hoverKey + 1) % 7 === 0) {
				// if (lefti < 300) {
				if (this.props.hoverKey > this.props.theKey)
					return {
						transform: 'translate3d(-120px, 0, 0) scaleY(1) '
					};
			}

			//slide ebelah kanan yang di hover
			if (this.props.hoverKey < this.props.theKey) {
				return {
					transform: 'translate3d(40px, 0, 0) scaleY(1) '
				};
			}

			//default untuk semua slide
			return {
				transform: 'translate3d(-40px, 0, 0)  scaleY(1)'
			};
		}
	};

	renderBackgroundLinear = () => (
		<div
			style={{
				position: 'absolute',
				background: 'linear-gradient(to top, rgba(0,0,0,1),  rgba(0,0,0,0.6), rgba(0,0,0,0.3))',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			}}
		/>
	);

	renderTitle = (title, item) => {
		return (
			<Link
				to={`/movie/${title}`}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: '10',
					margin: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					textAlign: 'center',
					transition: 'all 0.5s ease',
					padding: 10
				}}
			>
				<Typography style={{ textAlign: 'center' }} variant='subtitle1'>
					{item.series}
				</Typography>
			</Link>
		);
	};

	renderFade = (item, classes, title, theme) => {
		return (
			<Fade
				in={this.state.expanded}
				timeout={{
					enter: 1200,
					exit: 1200
				}}
				unmountOnExit
				mountOnEnter
				className={classes.item}
			>
				<div>
					<Link to={`/movie/${title}`} className={classes.absolute} style={{ zIndex: -10 }} />
					<div className={classes.info}>
						<Link
							to={`/movie/${title}`}
							style={{
								marginBottom: 4
							}}
						>
							<Button
								size='small'
								variant='outlined'
								style={{ borderColor: theme.palette.secondary.main }}
							>
								<Icon color='secondary'>play_arrow</Icon>
							</Button>
						</Link>
						<Typography variant='body1' style={{ textAlign: 'center' }}>
							{item.series}
						</Typography>
						<Button fullWidth style={{ width: 100 }} onClick={this.handleButtonArrow}>
							<Icon>keyboard_arrow_down</Icon>
						</Button>
					</div>
				</div>
			</Fade>
		);
	};

	render() {
		const { classes, item, theme } = this.props;
		const title = item.series.replace(/\s+/g, '-').toLowerCase() + '-episode-1';
		return (
			<div
				className={classes.card}
				style={{
					backgroundImage: `url(${item.image_url})`,
					backgroundSize: 'fill',
					backgroundPosition: 'center',
					display: 'relative',
					position: 'relative',
					...this.styleWhileHover(),
					border: this.props.hasFocus === this.props.item && `3px solid white`
				}}
				onMouseEnter={this.openExpand}
				onMouseLeave={this.closeExpand}
				key={item.id}
			>
				<div className={classes.absolute} ref={(ref) => (this.div = findDOMNode(ref))}>
					{this.state.expanded && this.renderBackgroundLinear()}
					{!this.props.hasFocus && this.renderFade(item, classes, title, theme)}
					{this.props.hasFocus && this.state.expanded && this.renderTitle(title, item)}
				</div>
			</div>
		);
	}
}

CardHorizontal.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withTheme()(withStyles(styles)(CardHorizontal));
