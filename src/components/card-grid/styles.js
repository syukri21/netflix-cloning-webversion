import red from '@material-ui/core/colors/red';

export const styles = (theme) => ({
	card: {
		borderRadius: 0,
		display: 'flex',
		flexDirection: 'column',
		height: 200
	},

	actions: {
		display: 'flex',
		background: 'linear-gradient(to bottom	, #0A0B0A00, #0A0B0A)',
		width: '100%',
		alignSelf: 'flex-end'
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
		height: 100,
		width: '100%',
		color: 'white',
		background: theme.palette.secondary.dark,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 2,
		overflow: 'hidden'
	},
	collapsRoot: {
		background: '#0A0B0A88',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '100%',
		bottom: 0,
		top: 0,
		position: 'absolute'
	},
	collaps: {
		minWidth: '100%',
		bottom: 0,
		position: 'absolute'
	}
});
