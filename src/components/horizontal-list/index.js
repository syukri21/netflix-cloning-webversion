import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Slider from 'react-slick';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { ALL_POPULARS } from '../../redux/actions/popular';
import { ALL_TRENDINGS } from '../../redux/actions/trending';
import _ from 'lodash';

import Title from '../title';
import CardHorizontal from '../card-horizontal';

import { styles } from './styles';

class NewReleases extends React.Component {
	state = {
		middle: null,
		isDone: false,
		check: false,
		counter: 0
	};

	next = () => this.slide.slickNext();
	prev = () => this.slide.slickPrev();

	renderLoading(classes) {
		var settings = {
			dots: true,
			infinite: true,
			speed: 300,
			focusOnSelect: true,
			afterChange: this.getIndexCenter,
			slidesToShow: this.getSideToShow(),
			slidesToScroll: this.getSideToShow()
		};

		if (this.state.counter < 2)
			return (
				<div className={classes.center}>
					<CircularProgress color='secondary' />;
				</div>
			);

		return (
			<div className={classes.horizontalListContainer}>
				<Fab size='small' variant='extended' color='secondary' className={classes.arrow} onClick={this.prev}>
					<Icon className={classes.arrowIcon}>arrow_left</Icon>
				</Fab>

				<Slider
					{...settings}
					className={classes.item}
					arrows={false}
					ref={(ref) => (this.slide = ref)}
					adaptiveHeight={true}
				>
					{_.uniqBy(this.props.data.results, 'title').map((item, key) => (
						<CardHorizontal item={item} key={key} />
					))}
				</Slider>

				<Fab size='small' variant='extended' className={classes.arrow} color='secondary' onClick={this.next}>
					<Icon className={classes.arrowIcon}>arrow_right</Icon>
				</Fab>
			</div>
		);
	}

	componentDidMount() {
		if (this.props.type === 'ALL_TRENDINGS') {
			this.props.dispatch(ALL_TRENDINGS());
		}
		if (this.props.type === 'ALL_POPULARS') {
			this.props.dispatch(ALL_POPULARS());
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

	renderShowAll = () => {
		const { classes } = this.props;
		return (
			<Fab variant='extended' size='small' color='secondary' className={classes.showAllButton}>
				<Typography variant='caption' className={classes.showAllTextButton}>
					Show All
				</Typography>
			</Fab>
		);
	};

	getIndexCenter = (val) =>
		this.setState({
			middle: val
		});

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.flexStart}>
					<Title>{this.props.title}</Title>
				</div>
				{this.renderLoading(classes)}
			</div>
		);
	}
}

const withWidthNewReleases = withWidth()(NewReleases);
const withStylesNewReleases = withStyles(styles)(withWidthNewReleases);

export default connect()(withStylesNewReleases);
