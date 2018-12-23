import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import SignUpForm from './components/signup-form.js';
import { styles } from './styles';

const SignUp = ({ classes }) => (
	<div className={classes.root}>
		<div className={classes.linearGradient} />
		<div className={classes.content}>
			<SignUpForm />
		</div>
	</div>
);

const withStylesSignUp = withStyles(styles)(SignUp);
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(withStylesSignUp);
