import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Slider from 'react-slick';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { ALL_POPULARS } from '../../redux/actions/popular';
import { ALL_MOVIES } from '../../redux/actions/movie';
import CardHorizontalEpisode from '../card-horizontal-episode';
import classnames from 'classnames';

import Title from '../title';
import CardHorizontal from '../card-horizontal';
import HorizontalDetail from '../horizontal-detail/';
import ShimmerHorizontalList from '../shimmer-horizontal-list';
import _ from 'lodash';

import { styles } from './styles';
import { Slide } from '@material-ui/core';

class NewReleases extends React.Component {
	state = {
		middle: null,
		check: false,
		counter: 0,
		hover: false,
		hoverKey: -1,
		hasExpand: true,
		onFocus: null
	};

	//navigation slider
	getSliderRef = (ref) => (this.slide = ref);
	next = () => this.slide.slickNext();
	prev = () => this.slide.slickPrev();

	// event
	handleMouseEnter = () => this.setState({ hover: true });
	handleMouseLeave = () => this.setState({ hover: false });

	// getter
	getSideToShow = () => {
		if (isWidthUp('lg', this.props.width)) {
			return 5;
		} else if (isWidthUp('md', this.props.width)) {
			return 4;
		} else if (isWidthUp('sm', this.props.width)) {
			return 2;
		} else {
			return 1;
		}
	};

	getIndexCenter = (val) => {
		this.setState({
			middle: val
		});
	};

	getHasExpand = (e) => {
		this.setState({
			hasExpand: e
		});
	};

	getFocus = (e) => {
		this.setState({
			onFocus: e
		});
	};

	// life cycle
	componentDidMount() {
		if (this.props.type === 'ALL_POPULARS') {
			this.props.dispatch(ALL_POPULARS(14));
		} else if (this.props.type === 'ALL_MOVIES') {
			this.props.dispatch(ALL_MOVIES(0, 20));
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (!nextProps.data.isLoading && !nextProps.data.isError) {
			if (prevState > 3) {
				return;
			}
			return { counter: prevState.counter + 1 };
		} else return null;
	}

	renderGetSlide = (settings, classes) => {
		if (this.props.title === 'Episode') {
			return this.renderSliderEpisode(settings, classes);
		} else if (this.props.title === 'New Releases') {
			return this.renderSliderNewrelases(settings, classes);
		}
		return this.renderSlider(settings, classes);
	};
	//render
	renderLoading(classes) {
		var settings = {
			dots: true,
			infinite: false,
			speed: 300,
			afterChange: this.getIndexCenter,
			variableWidth: true,
			slidesToShow: this.props.data.results.length < 7 ? this.props.data.results.length : 7,
			slidesToScroll: 7
		};

		if (this.state.counter < 2) {
			return (
				<div className={classes.center}>
					<ShimmerHorizontalList />;
				</div>
			);
		}

		return (
			<div>
				<div className={classes.horizontalListContainer}>
					<Fab
						size='small'
						variant='extended'
						color='secondary'
						className={classes.arrow}
						onClick={this.prev}
					>
						<Icon className={classes.arrowIcon}>arrow_left</Icon>
					</Fab>
					{this.renderGetSlide(settings, classes)}

					<Fab
						size='small'
						variant='extended'
						className={classes.arrow}
						color='secondary'
						onClick={this.next}
					>
						<Icon className={classes.arrowIcon}>arrow_right</Icon>
					</Fab>
				</div>
			</div>
		);
	}

	renderSlider = (settings, classes) => {
		return (
			<div>
				<Slider
					{...settings}
					className={classnames(classes.item, { [classes.middleCard]: this.props.data.results.length < 7 })}
					arrows={false}
					ref={this.getSliderRef}
					adaptiveHeight={false}
				>
					{this.props.data.results.map((item, key) => (
						<div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={key}>
							<CardHorizontal
								hover={this.state.hover}
								item={item}
								theKey={key}
								key={key}
								hoverKey={this.state.hoverKey}
								getHoverKey={(key) => this.setState({ hoverKey: key })}
								getHasExpand={this.getHasExpand}
								hasExpand={this.state.hasExpand}
								getFocus={this.getFocus}
								hasFocus={this.state.onFocus}
							/>
						</div>
					))}
				</Slider>
			</div>
		);
	};

	renderSliderEpisode = (settings, classes) => (
		<div>
			<Slider
				{...settings}
				className={classes.item}
				arrows={false}
				ref={this.getSliderRef}
				adaptiveHeight={false}
			>
				{_.orderBy(this.props.data.results, [ (e) => parseInt(e.episode) ], [ 'desc' ]).map((item, key) => (
					<div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={key}>
						<CardHorizontalEpisode
							hover={this.state.hover}
							item={item}
							theKey={key}
							key={key}
							hoverKey={this.state.hoverKey}
							getHoverKey={(key) => this.setState({ hoverKey: key })}
							getHasExpand={this.getHasExpand}
							hasExpand={this.state.hasExpand}
							getFocus={this.getFocus}
							hasFocus={this.state.onFocus}
						/>
					</div>
				))}
			</Slider>
		</div>
	);

	renderSliderNewrelases = (settings, classes) => (
		<div>
			<Slider
				{...settings}
				className={classes.item}
				arrows={false}
				ref={this.getSliderRef}
				adaptiveHeight={false}
			>
				{this.props.data.results.map((item, key) => (
					<div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={key}>
						<CardHorizontalEpisode
							hover={this.state.hover}
							item={item}
							theKey={key}
							key={key}
							hoverKey={this.state.hoverKey}
							getHoverKey={(key) => this.setState({ hoverKey: key })}
							getHasExpand={this.getHasExpand}
							hasExpand={this.state.hasExpand}
							getFocus={this.getFocus}
							hasFocus={this.state.onFocus}
						/>
					</div>
				))}
			</Slider>
		</div>
	);

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				{(this.props.title !== 'Episode' || this.props.title !== 'New Releases') && (
					<Slide
						in={this.state.onFocus ? true : false}
						timeout={{ enter: 500, exit: 500 }}
						mountOnEnter
						unmountOnExit
						direction='right'
					>
						<HorizontalDetail item={this.state.onFocus} getFocus={this.getFocus} />
					</Slide>
				)}

				{this.renderLoading(classes)}
			</div>
		);
	}
}

const withWidthNewReleases = withWidth()(NewReleases);
const withStylesNewReleases = withStyles(styles)(withWidthNewReleases);

export default connect()(withStylesNewReleases);
