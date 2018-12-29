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
	rootChip: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	chip: {
		marginRight: theme.spacing.unit,
		marginTop: theme.spacing.unit,
		backgroundColor: '#E0E0E022',
		color: 'white'
	},
	roots: {
		display: 'flex',
		justifyContent: 'center'
	},
	movieRoot: {
		position: 'relative',
		zIndex: 100,
		minHeight: 'calc(100vh - 50px)',
		padding: '70px 10px 10px 10px'
	},
	categoriesRoot: {
		marginRight: 5,
		marginTop: 5,
		borderRadius: 10,
		border: '1px solid #44CD66'
	},
	black: {
		color: 'black	'
	},
	cardDetail: {
		backgroundColor: theme.palette.primary.main,
		display: 'grid',
		gridTemplateColumns: ' auto 1fr',
		justifyContent: 'center',
		gridGap: '5px',
		alignItems: 'center',

		padding: '0px 10px 0 40px',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr'
		}
	},
	cardImage: {
		width: '300px',
		height: '400px'
	},
	paper: {
		position: 'relative',
		zIndex: 100,
		padding: 10,
		margin: 40,
		display: 'flex',
		justifyContent: 'center'
	}
});

export const styled = {
	root: (movie) => ({
		position: 'relative'
	})
};
