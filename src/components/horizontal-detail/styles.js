const styles = (theme) => ({
	root: {
		background: theme.palette.primary.dark,
		display: 'flex',
		minHeight: '70vh',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		padding: '0px 60px 40px ',
		position: 'relative'
	},
	image: {
		width: 200,
		height: 300
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
