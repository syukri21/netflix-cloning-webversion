const styles = (theme) => ({
	root: {
		// background: theme.palette.primary.dark,,
		background: 'rgba(51, 51, 51, 0.6)',
		marginTop: 10,
		display: 'grid',
		gridTemplateColumns: '1fr auto',
		alignItems: 'center',
		position: 'relative'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	imageContainer: {
		display: 'flex',
		justifyContent: 'center'
	},
	cardActions: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	navigation: {
		width: '100%',
		backgroundColor: 'rgba(51, 51, 51, 0.1)'
	}
});

export { styles };
