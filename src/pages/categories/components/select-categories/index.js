import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { data } from '../../../../dummy-data';
import { styles } from './styles';

class SelectCategories extends React.Component {
	state = {
		category: '',
		open: false
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		this.props.getCategory(event.target.value);
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
					<InputLabel
						htmlFor='demo-controlled-open-select'
						className={classes.label}
						focused={false}
					>
						category
					</InputLabel>
					<Select
						open={this.state.open}
						onClose={this.handleClose}
						onOpen={this.handleOpen}
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
						{data.categories.map((item, key) => (
							<MenuItem value={item.id} key={key}>
								{item.name}
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

export default withStyles(styles)(SelectCategories);
