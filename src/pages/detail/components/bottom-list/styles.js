export const styles = (theme) => ({
	root: {
		position: 'relative',
		zIndex: 100,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: 'calc(100% - 40px)'
	},
	progress: {
		margin: theme.spacing.unit * 2
	}
});
