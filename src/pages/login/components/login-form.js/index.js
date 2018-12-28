import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint, ArrowBackIos, Warning} from '@material-ui/icons';
import { styles } from './styles';
import { Link, withRouter } from 'react-router-dom';
import { USER_LOGIN } from '../../../../redux/actions/user';
import validator from 'validator';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';



class LoginTab extends React.Component {
	state = {
		email: '',
		password: '',
		open: false,
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	  };
	
	handleClose = () => {
		this.setState({ open: false });
	  };
	

	handleChangeText = (target) => (e) =>
		this.setState({
			[target]: e.target.value
		});

	handleLogin = async () => {
		const { email, password } = this.state;
		if (!validator.isEmail(email)) {
			// return alert(`${email} is not a valid email.`);
			return this.handleClickOpen();
		}
		await this.props.dispatch(USER_LOGIN(email, password));
		sessionStorage.setItem('token', this.props.user.login.token);
		if (this.props.user.login.token) return this.props.history.push('/');

		return alert(this.props.user.login.message);
	};



	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.padding}>
				<div className={classes.margin}>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Face style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true}>
							<TextField
								onChange={this.handleChangeText('email')}
								label='E-Mail'
								type='email'
								fullWidth
								autoFocus
								required
							/>
						</Grid>
					</Grid>
					<Grid container spacing={8} alignItems='flex-end'>
						<Grid item>
							<Fingerprint style={{color:"#e84393"}}/>
						</Grid>
						<Grid item md={true} sm={true} xs={true} >
							<TextField
								onChange={this.handleChangeText('password')}
								label='Password'
								type='password'
								fullWidth
								required	
							/>
						</Grid>
					</Grid>

					<Grid container alignItems='center' justify='space-between'>
						<Grid item>
							<FormControlLabel control={<Checkbox color='primary' />} label='Remember me' />
						</Grid>
						<Grid item>
							<Button
								disableFocusRipple
								disableRipple
								style={{ textTransform: 'none' }}
								variant='text'
								color='primary'
							>
								Forgot password ?
							</Button>
						</Grid>
					</Grid>

					<Grid container justify='center' style={{ marginTop: '10px' }}>
						<Button
							variant='contained'
							color='secondary'
							style={{ textTransform: 'none' }}
							onClick={this.handleLogin}
						>
							Login
						</Button>
						
					</Grid>
					<Grid container justify='center' style={{ padding: '10px' }}>
						<Link to='/signup'>
							<Button color='primary' style={{ textTransform: 'none' }}>
								Don't have an account? please &nbsp;<b style={{color:"#e84393"}}> SIGN UP</b>
							</Button>
						</Link>
					</Grid>
					<Divider />

					<Grid container alignItems='center' justify='space-between' style={{padding: `10px`}}>
					<Grid item >
						<Link to='/'>
							<Button color='primary' style={{ textTransform: 'none' }}>
								<ArrowBackIos /> Back to Homepage
							</Button>
						</Link>
					</Grid>
					{/* <Grid item >
						<Link to='/signup'>
							<Button color='primary' style={{ textTransform: 'none' }}>
								Sign Up
							</Button>
						</Link>
					</Grid> */}
					</Grid>
				</div>

				        <Dialog
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<DialogTitle id="alert-dialog-title" style={{flexDirection:"column"}}>
						
							<p style={{color:"#e84393",	}}>
								INFO
								&nbsp;
								<span><b>!</b></span>
							</p>
						
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
							Wrong email or password, Please try again.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="secondary" autoFocus>
							Close
							</Button>
						</DialogActions>
						</Dialog>
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
