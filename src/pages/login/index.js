import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import LoginForm from './components/login-form.js';
import { styles } from './styles';

const Login = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.linearGradient} />
		<div className={classes.content}>
			<LoginForm />
		</div>
	</div>
);

const withStylesLogin = withStyles(styles)(Login);
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withStylesLogin);
