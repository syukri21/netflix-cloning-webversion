import red from '@material-ui/core/colors/red';

export const styles = (theme) => ({
	card: {
		width: 155,
		height: 200,
		borderRadius: 0,
		position: 'relative',
		marginLeft: 5,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		cursor: 'pointer',
		transition: ' 300ms ease-in-out',
		transitionDelay: '0.4s'
	},
	actions: {
		display: 'flex',
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
	},
	item: {
		// background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.3))',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'flex-start',
		boxSizing: 'border-box',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		position: 'relative',
		height: '200px',
		transform: 'scale(1)'
	},
	absolute: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		justifyContent: 'center'
	},
	info: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		transform: 'scale(0.7)'
	}
});
