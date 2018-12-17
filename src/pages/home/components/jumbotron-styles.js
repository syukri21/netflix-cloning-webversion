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
			alignItems: 'flex-end'
		},
		content: {
			position: 'relative',
			zIndex: 100,
			justifyContent: 'center',
			alignItems: 'center',
			marginBottom: theme.spacing.unit
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
			color: 'white',
			fontSize: 30
		},
		button: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: theme.spacing.unit
		},
		leftIcon: {
			marginRight: theme.spacing.unit
		},
		rightIcon: {
			marginLeft: theme.spacing.unit
		},
		middleIcon: {
			alignSelf: 'center',
			display: 'flex',
			width: '100%',
			justifyContent: 'center',
			color: ' #FFFFFF'
		},
		iconSmall: {
			fontSize: 20
		},
		BottomIcon: {
			display: 'grid',
			textAlign: 'center',
			justifyContent: 'center',
			alignItems: 'center'
		}
	};
};
