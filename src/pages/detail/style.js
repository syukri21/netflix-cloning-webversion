export const styles = (theme) => ({
	backgroundLinear: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: '2',
		backgroundImage: 'linear-gradient(to top, rgba(0,0,0, 1),  rgba(0,0,0, 0.7), rgba(0,0,0, 0.1))'
	},
	roots: {
		display: 'flex',
		justifyContent: 'center'
	},
	movieRoot: {
		position: 'relative',
		zIndex: 100,
		minHeight: 'calc(100vh - 50px)',
		padding: '70px 10px 10px 10px',
		width: '100%'
	},
	categoriesRoot: {
		marginRight: 20,
		borderRadius: 10,
		border: '2px solid #F44336'
	},
	black: {
		color: 'black	'
	}
});

export const styled = {
	root: (movie) => ({
		position: 'relative'
	})
};
