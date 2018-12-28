import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Mail, Lock } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
import validator from 'validator';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import { USER_REGISTER } from '../../../../redux/actions/user';
import { styles } from './styles';

class LoginTab extends React.Component {
	state = {
		mail: null,
		username: null,
		password: null,
		confirmPassword: null,
		agreement: false,
		open: false,
		error: null
	};

	handleChangeText = (target) => (e) => {
		this.setState({
			[target]: e.target.value
		});
	};

	handleAgreement = () =>
		this.setState({
			agreement: !this.state.agreement
		});

	handleOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleSignUp = async () => {
		const { mail, password, confirmPassword, username, agreement } = this.state;
		if (password !== confirmPassword) {
			this.setState({
				error: 'password not equal !'
			});
			this.handleOpen();
			return;
		}
		if (!validator.isEmail(mail || 'gakvalid')) {
			this.setState({
				error: `${mail} is not a valid email.`
			});
			this.handleOpen();
			return;
		}
		if (!agreement) {
			this.setState({
				error: `check agreement first`
			});
			this.handleOpen();
			return;
		}

		if (!password) {
			this.setState({
				error: `isi password terlebih dahulu`
			});
			this.handleOpen();
			return;
		}

		if (!password) {
			this.setState({
				error: `isi username terlebih dahulu`
			});
			this.handleOpen();
			return;
		}
		await this.props.dispatch(USER_REGISTER(username, username, mail, password));
		alert(this.props.user.regist && this.props.user.regist.message);
		this.props.user.regist && this.props.user.regist && this.props.history.push('/login');
	};

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.padding}>
				<div className={classes.margin}>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Mail style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true}>
							<TextField
								label='E-Mail'
								type='email'
								onChange={this.handleChangeText('mail')}
								fullWidth
								autoFocus
								required
								color='primary'
							/>
						</Grid>
					</Grid>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Face style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true}>
							<TextField
								label='Username'
								type='text'
								onChange={this.handleChangeText('username')}
								fullWidth
								autoFocus
								required
								color='primary'
							/>
						</Grid>
					</Grid>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Lock style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true}>
							<TextField
								label='Password'
								type='password'
								onChange={this.handleChangeText('password')}
								fullWidth
								required
								color='primary'
							/>
						</Grid>
					</Grid>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Lock style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true}>
							<TextField
								label='Confirm Password'
								type='password'
								onChange={this.handleChangeText('confirmPassword')}
								fullWidth
								required
								color='primary'
							/>
						</Grid>
					</Grid>
					<Grid container alignItems='flex-end' justify='space-between' style={{ minWidth: 400 }}>
						<Grid item>
							<FormControlLabel
								control={
									<Checkbox
										color='primary'
										checked={this.state.agreement}
										onClick={this.handleAgreement}
									/>
								}
								label={
									<Typography variant='subtitle2' style={{ color: 'black' }}>
										agreement terms
									</Typography>
								}
							/>
						</Grid>
					</Grid>
					<Grid container justify='center' style={{ marginTop: '10px' }}>
						<Button
							variant='contained'
							color='secondary'
							style={{ textTransform: 'none' }}
							onClick={this.handleSignUp}
						>
							Sign up
						</Button>
					</Grid>
					<Grid container justify='flex-end' style={{ marginTop: '10px' }}>
						<Link to='/login'>
							<Button color='primary' style={{ textTransform: 'none' }}>
								Login
							</Button>
						</Link>
					</Grid>
				</div>
				<Modal
					aria-labelledby='simple-modal-title'
					aria-describedby='simple-modal-description'
					open={this.state.open}
					onClose={this.handleClose}
				>
					<div className={classes.paper}>
						<Typography variant='subtitle1' id='simple-modal-description' style={{ color: 'black' }}>
							{this.state.error}
						</Typography>
					</div>
				</Modal>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => ({
	user: state.userReducer
});

const withConnectLoginTab = connect(mapStateToProps)(LoginTab);
const withRouterLoginTab = withRouter(withConnectLoginTab);

export default withStyles(styles)(withRouterLoginTab);
