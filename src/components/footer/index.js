import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classnames from 'classnames';

import { styles } from './styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { loadCSS } from 'fg-loadcss/src/loadCSS';

class Footer extends React.Component {
	componentDidMount() {
		loadCSS(
			'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
			document.querySelector('#insertion-point-jss')
		);
	}
	render() {
		const { classes } = this.props;
		return (
			<Grid container>
				<Grid item xs={12} sm={3} className={classes.footerLeft}>
					<div style={{ marginBottom: 10 }}>
						<img src='/assets/notflix.png' className={classes.image} alt='#' />
					</div>
					<Typography className={classes.logo}>Animeflix.id Inc &copy; 2018</Typography>
				</Grid>
				<Grid item xs={12} sm={9} className={classes.footerRight}>
					<Grid container style={{ height: '100%' }}>
						<Grid item xs={12} sm={3} className={classes.footerRightContent}>
							<Button variant='contained' color='primary'>
								Menu
							</Button>
							<Button className={classes.button}>Home</Button>
							<Button className={classes.button}>Categories</Button>
						</Grid>
						<Grid item xs={12} sm={3} className={classes.footerRightContent}>
							<Button variant='contained' color='primary'>
								GET APPS ON
							</Button>
							<Button className={classnames(classes.button, 'fab fa-google-play fa-2x')}> </Button>
						</Grid>
						<Grid item xs={12} sm={3} className={classes.footerRightContent}>
							<Button variant='contained' color='primary'>
								Follow Us
							</Button>
							<Button className={classnames(classes.button, 'fab fa-facebook fa-2x')}> </Button>
							<Button className={classnames(classes.button, 'fab fa-instagram fa-2x')}> </Button>
						</Grid>
						<Grid item xs={12} sm={3} className={classes.footerRightContent}>
							<Button variant='contained' color='secondary'>
								SUBSCRIBE
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Footer);
