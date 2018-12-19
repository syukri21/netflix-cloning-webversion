import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';

import { data } from '../../../../dummy-data';

const styles = (theme) => {
	return {
		form: {
			display: 'flex'
		},
		buttonWraper: {
			alignSelf: 'center'
		},
		button: {
			display: 'block',
			paddingLeft: 10,
			color: 'white',
			'&:focus': {
				color: 'white'
			},
			backgroundColor: '#F44336'
		},
		dropdownStyle: {
			'& ul': {
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 1fr)',
				'& li': {
					display: 'flex',
					justifyContent: 'center'
				}
			}
		},
		label: {
			color: 'white'
		},
		formControl: {
			margin: theme.spacing.unit,
			minWidth: 200,
			color: 'white',
			borderRadius: 10
		},
		selectForm: {
			padding: 10,
			color: 'white !important',
			borderBottom: '3px solid #F44336',
			'& svg': {
				color: 'white'
			}
		}
	};
};

class SelectCategories extends React.Component {
	state = {
		age: '',
		open: false
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
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
						categories
					</InputLabel>
					<Select
						open={this.state.open}
						onClose={this.handleClose}
						onOpen={this.handleOpen}
						value={this.state.age}
						onChange={this.handleChange}
						inputProps={{
							name: 'age',
							id: 'demo-controlled-open-select'
						}}
						className={classes.selectForm}
						MenuProps={{
							classes: {
								paper: classes.dropdownStyle,
								List: classes.dropdownStyle
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
