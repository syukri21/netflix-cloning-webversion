import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { GET_CATEGORY } from '../../../../redux/actions/category';

import { styles } from './styles';

const listCategory = [
	{
		name: 'Action'
	},
	{
		name: 'Adventure'
	},
	{
		name: 'Romance'
	},
	{
		name: 'Fantasy'
	},
	{
		name: 'Horror'
	}
];

class SelectCategories extends React.Component {
	state = {
		category: '',
		open: false
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		this.props.getCategory(event.target.value);
		this.props.dispatch(GET_CATEGORY(event.target.value, 20));
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleOpen = () => {
		this.setState({ open: true });
	};

	render() {
		const { classes } = this.props;
		return (
			<form autoComplete='off' className={classes.form}>
				<FormControl className={classes.formControl} color='secondary'>
					<InputLabel htmlFor='demo-controlled-open-select' className={classes.label} focused={false}>
						category
					</InputLabel>
					<Select
						open={this.state.open}
						onClose={this.handleClose}
						onOpen={this.handleOpen}
						placeholder='Action'
						value={this.state.category}
						onChange={this.handleChange}
						inputProps={{
							name: 'category',
							id: 'demo-controlled-open-select'
						}}
						className={classes.selectForm}
						MenuProps={{
							classes: {
								paper: classes.dropdownStyle
							}
						}}
					>
						{listCategory.map((item, key) => (
							<MenuItem value={item.name || 'Action'} key={key} color='secondary'>
								<Typography color={this.state.open ? 'primary' : 'textPrimary'}>{item.name}</Typography>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</form>
		);
	}
}

SelectCategories.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	categories: state.categoryReducer
});

const withConnectSelectCategories = connect(mapStateToProps)(SelectCategories);

export default withStyles(styles)(withConnectSelectCategories);
