export const styles = (theme) => {
	return {
		item: {
			display: 'flex',
			flexDirection: 'row',
			width: 'calc(100vw - 17px - 100px - 40px)',
			margin: 'auto',
			gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',

			// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
			transform: 'translateZ(0)'
		},
		arrow: {
			opacity: 0.1,
			backgroundColor: '#F44336',
			zIndex: 200,
			width: 50,
			height: '200px',
			borderRadius: 0,
			alignSelf: 'center',

			'&:focus': {
				opacity: 0.5
			},
			'&:hover': {
				opacity: 0.5
			}
		}
	};
};
