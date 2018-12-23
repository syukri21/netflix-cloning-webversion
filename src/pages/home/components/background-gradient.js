import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './background-gradient-styles';

const BackgroundGradient = ({ classes }) => <div className={classes.gradient} />;

export default withStyles(styles)(BackgroundGradient);
