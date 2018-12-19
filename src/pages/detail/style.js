export const styles = (theme) => ({
	backgroundLinear: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: '2',
		backgroundImage:
			'linear-gradient(to left,rgba(0,0,0, 1), rgba(0,0,0, 1),  rgba(0,0,0, 0.7), rgba(0,0,0, 0.1))'
	}
});

export const styled = {
	root: (movie) => ({
		height: 'calc(100vh )',
		position: 'relative',
		backgroundImage: `url(${movie && movie.image})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	})
};
