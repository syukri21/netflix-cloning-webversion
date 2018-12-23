import red from '@material-ui/core/colors/red';

export const styles = (theme) => ({
	card: {
		width: 250,
		borderRadius: 0,
		height: 300,
		position: 'relative',
		marginLeft: 10,
		display: 'flex',
		flexDirection: 'column',
		cursor: 'pointer',
		transition: ' 300ms ease-in-out',
		transitionDelay: '0.4s',
		transform: 'scaleY(0.7)'
	},
	actions: {
		display: 'flex',
		// background: 'linear-gradient(to bottom	, #0A0B0A00, #0A0B0A)',
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
		backgroundColor: red[500],
		color: 'white'
	},
	header: {
		height: '150px',
		// background: 'linear-gradient(to top	, #0A0B0A00, #0A0B0A)',
		width: '100%',
		color: 'white',
		alignItems: 'baseline'
	}
});
