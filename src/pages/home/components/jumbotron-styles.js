export const styles = (theme) => {
	return {
		images: {
			width: '100%',
			height: '580px',
			objectFit: 'fill',
			position: 'absolute',
			top: 0,
			left: 0
		},
		container: {
			width: '100%',
			height: '580px',
			overflow: 'hidden',
			position: 'relative',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		content: {
			position: 'relative',
			zIndex: 100,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 30
		},
		title: {
			color: 'white'
		},
		typograhpy: {
			marginRight: 20
		},
		chip: {
			margin: theme.spacing.unit,
			backgroundColor: '#E0E0E022',
			color: 'white'
		},
		p: {
			color: 'white'
		}
	};
};
