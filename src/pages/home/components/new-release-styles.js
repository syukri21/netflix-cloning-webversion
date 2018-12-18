export const styles = (theme) => {
	return {
		item: {
			display: 'flex',
			flexDirection: 'row',
			width: 'calc(100vw - 100px)',
			margin: 'auto',
			gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',

			// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
			transform: 'translateZ(0)'
		}
	};
};
