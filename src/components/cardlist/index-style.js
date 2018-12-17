import red from '@material-ui/core/colors/red';

export const styles = (theme) => ({
	card: {
		borderRadius: 0
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	actions: {
		display: 'flex',
		background: 'linear-gradient(to bottom	, #0A0B0A55, #0A0B0A)',
		width: 'calc(100% + 10px)'
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		}),
		marginLeft: 'auto',
		[theme.breakpoints.up('sm')]: {
			marginRight: -8
		}
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	},
	header: {
		background: 'linear-gradient(to top	, #0A0B0A55, #0A0B0A)',
		width: 'calc(100% + 10px)',
		color: 'white'
	}
});
