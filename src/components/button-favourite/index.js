import React from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withTheme } from '@material-ui/core/styles';
import { ADD_FAVOURITE, ALL_FAVOURITES } from '../../redux/actions/favourites';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';

class ButtonFavourite extends React.Component {
	cekFavorites = (series) => {
		const data = _.find(this.props.favorite.results, (e) => e.name_series === series);
		return data;
	};

	handleFavorite = (series) => async () => {
		const token = await sessionStorage.getItem('token');
		console.log('​ButtonFavourite -> handleFavorite -> token', token);
		if (token === 'null' || token === '' || token === 'undefined' || token === null) {
			return this.props.history.push('/login');
			console.log('​ButtonFavourite -> handleFavorite -> token', token);
		}
		if (!_.find(this.props.favorite.results, (e) => e.name_series === series)) {
			await this.props.dispatch(ADD_FAVOURITE(series, token));
			return this.props.dispatch(ALL_FAVOURITES(token));
		}
	};

	render() {
		const { series, classes, theme } = this.props;
		return (
			<Button
				color={_.find(this.props.favorite.results, (e) => e.name_series === series) ? 'secondary' : 'primary'}
				size='small'
				className={classNames(classes.button, classes.leftIcon, classes.BottomIcon)}
				onClick={this.handleFavorite(series)}
			>
				<div style={{ position: 'relative', minHeight: 25 }}>
					<Grow
						in={!_.find(this.props.favorite.results, (e) => e.name_series === series) ? true : false}
						timeout={{ enter: 1000, exit: 100 }}
						style={{ position: 'absolute' }}
					>
						<Icon
							className={classes.middleIcon}
							style={{
								color: 'white'
							}}
						>
							favorite
						</Icon>
					</Grow>
					<Grow
						in={_.find(this.props.favorite.results, (e) => e.name_series === series) ? true : false}
						timeout={{ enter: 1000, exit: 100 }}
						style={{ position: 'absolute' }}
					>
						<Icon
							className={classes.middleIcon}
							style={{
								color: theme.palette.secondary.light
							}}
						>
							favorite
						</Icon>
					</Grow>
				</div>
				<Typography style={{ color: 'white' }}>Favorites</Typography>
			</Button>
		);
	}
}

export default withRouter(connect()(withTheme()(ButtonFavourite)));
