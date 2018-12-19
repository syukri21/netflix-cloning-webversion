import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { styles, styled } from './style';
import { data } from '../../dummy-data';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';

import Video from './components/video';
import { Typography } from '@material-ui/core';

class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.query = props.location.query || null;
		this.state = {
			movie: null
		};
	}
	componentDidMount() {
		if (!this.query) return;
		const results = _.find(data.movies, (e) => e.id === this.query.id);
		this.setState({
			movie: results
		});
		console.log(results);
	}

	render() {
		const { classes } = this.props;
		if (!this.query) return <Redirect to='/' />;
		return (
			<div style={styled.root(this.state.movie)}>
				<div className={classes.backgroundLinear} />
				<Grid
					container
					style={{
						position: 'relative',
						zIndex: 100,
						height: '100%',
						padding: '70px 10px 10px 10px',
						width: '100%'
					}}
					spacing={24}
				>
					<Grid item xs={12} sm={4}>
						<Typography
							gutterBottom
							variant='display1'
							style={{ color: '#F44336' }}
						>
							{this.state.movie && this.state.movie.title}
						</Typography>
						<Typography
							gutterBottom
							paragraph
							variant='subheading'
							style={{ color: 'white' }}
						>
							{this.state.movie && this.state.movie.description}
						</Typography>

						{this.state.movie &&
							this.state.movie.categories.map((item, key) => (
								<Button
									key={key}
									variant='outlined'
									style={{
										marginRight: 20,
										borderRadius: 10,
										border: '2px solid #F44336'
									}}
								>
									<Typography
										variant='caption'
										style={{ color: '#F44336' }}
									>
										{item}
									</Typography>
								</Button>
							))}
					</Grid>
					<Grid
						item
						xs={12}
						sm={8}
						style={{
							borderRadius: 10,
							overflow: 'hidden'
						}}
					>
						<Video />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(Detail);
