import React from 'react';
import _ from 'lodash';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withTheme, withStyles } from '@material-ui/core/styles';
import { ADD_FAVOURITE, ALL_FAVOURITES } from '../../redux/actions/favourites';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import fetchFavourites from '../../utils/fetchFavourites';
import { styles } from './styles';

class ButtonFavourite extends React.Component {
	cekFavorites = (series) => {
		const data = _.find(this.props.favorite.results, (e) => e.name_series === series);
		return data;
	};

	async componentDidMount() {
		const token = sessionStorage.getItem('token');
		fetchFavourites(token);
	}

	handleFavorite = (series) => async () => {
		const token = await sessionStorage.getItem('token');
		if (token === 'null' || token === '' || token === 'undefined' || token === null) {
			return this.props.history.push('/login');
		}
		if (!_.find(this.props.favorite.results, (e) => e.name_series === series)) {
			await this.props.dispatch(ADD_FAVOURITE(series, token));
			return this.props.dispatch(ALL_FAVOURITES(token));
		}
	};

	render() {
		const { series, classes, theme } = this.props;
		const isExist = _.find(this.props.favorite.results, (e) => e.name_series === series) ? true : false;
		return (
			<Button
				color={_.find(this.props.favorite.results, (e) => e.name_series === series) ? 'secondary' : 'primary'}
				size='small'
				// className={classNames(classes.button, classes.leftIcon, classes.BottomIcon)}
				onClick={this.handleFavorite(series)}
				style={{ marginTop: theme.spacing.unit }}
			>
				<div>
					<Typography style={{ color: 'white' }} variant={'caption'}>
						Favorites
					</Typography>
					<div style={{ position: 'relative', minHeight: 25 }}>
						<Grow in={!isExist} timeout={{ enter: 1000, exit: 100 }} style={{ position: 'absolute' }}>
							<Icon
								className={classes.middleIcon}
								style={{
									color: 'white'
								}}
							>
								favorite
							</Icon>
						</Grow>
						<Grow in={isExist} timeout={{ enter: 1000, exit: 100 }} style={{ position: 'absolute' }}>
							<Icon
								className={classes.middleIcon}
								style={{
									color: theme.palette.secondary.light,
									fontSize: 35
								}}
							>
								favorite
							</Icon>
						</Grow>
					</div>
				</div>
			</Button>
		);
	}
}

const mapStateToProps = (state) => ({
	favorite: state.favouriteReducer
});

export default withStyles(styles)(withRouter(connect(mapStateToProps)(withTheme()(ButtonFavourite))));
