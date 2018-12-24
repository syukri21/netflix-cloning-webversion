import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
	};

	styleWhileHover = () => {
		// slide  yang di hover
		if (this.state.expanded) {
			// ukur jarak dari kiri dan kanan
			const left = window.innerWidth - this.div.getBoundingClientRect().left;
			const right = this.div.getBoundingClientRect().right;

			// slide paling kanan
			if (right < 350) {
				return {
					transform: 'translate3d(30px, 0, 0) scaleX(1.3) scaleY(1.5) '
				};
			}

			// slide paling kiri
			if (left < 350) {
				return {
					transform: `translate3d(-${135}px, 0, 0) scaleX(1.3) scaleY(1.5)`
				};
			}

			// slide yang di tengah
			return {
				transform: 'scaleX(1.3) scaleY(1.5)'
			};
		}

		// slide kalau sedang ada yang di hover
		if (this.props.hover && this.props.hasExpand) {
			// slide paling kiri
			if (this.props.hoverKey === 0 || this.props.hoverKey % 5 === 0) {
				if (this.props.hoverKey < this.props.theKey)
					return {
						transform: 'translate3d(65px, 0, 0) scaleY(1) '
					};
			}

			// slide paling kanan
			if ((this.props.hoverKey + 1) % 5 === 0) {
				if (this.props.hoverKey > this.props.theKey)
					return {
						transform: 'translate3d(-170px, 0, 0) scaleY(1) '
					};
			}

			//slide ebelah kanan yang di hover
			if (this.props.hoverKey < this.props.theKey) {
				return {
					transform: 'translate3d(35px, 0, 0) scaleY(1) '
				};
			}

			//default untuk semua slide
			return {
				transform: 'translate3d(-35px, 0, 0)  scaleY(1)'
			};
		}
	};

	renderBackgroundLinear = () => (
		<div
			style={{
				position: 'absolute',
				background: 'linear-gradient(to right, rgba(0,0,0,1),  rgba(0,0,0,1), rgba(0,0,0,0.3))',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			}}
		/>
	);

	render() {
		const { classes, item } = this.props;

		const title = item.title.replace(/\s+/g, '').toLowerCase();
		return (
			<div
				className={classes.card}
				style={{
					backgroundImage: `url(${item.image})`,
					backgroundSize: 'cover',
					backgroundPosition: 'fill',
					display: 'relative',
					position: 'relative',
					...this.styleWhileHover()
				}}
				onMouseEnter={this.openExpand}
				onMouseLeave={this.closeExpand}
				key={item.id}
			>
				<div
					style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0 }}
					ref={(ref) => (this.div = findDOMNode(ref))}
				>
					{this.state.expanded && this.renderBackgroundLinear()}
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
							<Link
								to={{
									pathname: `/movie/${title}`,
									query: {
										title: item.title,
										id: item.id
									}
								}}
								className={classes.absolute}
								style={{ zIndex: -10 }}
							/>
							<div className={classes.info}>
								<Link
									to={{
										pathname: `/movie/${title}`,
										query: {
											title: item.title,
											id: item.id
										}
									}}
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
								</Link>
								<Typography variant='body1'>{item.title}</Typography>
								<Typography variant='caption' style={{ color: '#46D369' }}>
									{item.rating}
								</Typography>
								<Typography variant='caption'>
									<span style={{ color: '#46D369' }}>Genre</span> : {item.genre}
								</Typography>
								<Button>
									<Icon>keyboard_arrow_down</Icon>
								</Button>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		);
	}
}

CardHorizontal.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardHorizontal);
