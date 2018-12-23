export const styles = (theme) => {
	return {
		item: {
			display: 'flex',
			flexDirection: 'row',
			width: 'calc(100vw - 17px - 100px - 40px)',
			margin: 'auto',
			justifyContent: 'center',
			alignItems: 'center',

			// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
			'& button': {
				display: 'flex'
			}
		},
		arrow: {
			opacity: 0.1,
			backgroundColor: theme.palette.secondary.main,
			zIndex: 200,
			width: 50,
			height: '200px',
			borderRadius: 0,
			alignSelf: 'center',
			transistion: 'all 0.5s ease-in-out',
			'&:hover': {
				opacity: 0.8,
				transistion: 'all 0.5s ease-in-out'
			}
		},
		arrowIcon: {
			fontSize: 100,
			color: theme.palette.text.primary
		}
	};
};
