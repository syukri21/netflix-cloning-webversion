export const styles = (theme) => ({
	margin: {
		margin: theme.spacing.unit * 2,
		'& input': {
			color: 'black'
		}
	},
	padding: {
		padding: theme.spacing.unit
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		top: '50%',
		left: '50%',
		transform: `translate(-${50}%, -${50}%)`
	}
});
