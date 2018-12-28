export const styles = (theme) => {
	return {
		root: {
			display: 'flex',
			flexDirection: 'column',
			width: '100%',
			transistion: 'all 1s ease'
		},
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
			},
			'& .slick-list': {
				display: 'flex',
				alignItems: 'center',
				height: 300
			},
			'& .slick-slide': {
				display: 'flex',
				alignItems: 'center',
				height: 200
			},
			'& .slick-slide > div': {
				display: 'flex',
				alignItems: 'center'
			},
			'& .slick-list .slick-track': {
				height: 200,
				display: 'flex',
				alignItems: 'center'
			}
		},
		middleCard: {
			'& .slick-track': {
				justifyContent: 'center'
			}
		},
		arrow: {
			opacity: 1,
			// background: `linear-gradient(to bottom ,${theme.palette.primary.main}, ${theme.palette.secondary
			// 	.main}5c, ${theme.palette.primary.main})`,
			background: theme.palette.primary.main,
			zIndex: 200,
			width: 50,
			height: '200px',
			borderRadius: 0,
			alignSelf: 'center',
			transistion: 'all 0.5s ease-in-out',
			boxShadow: 'none',
			'&:hover': {
				opacity: 1,
				transistion: 'all 0.5s ease-in-out',
				background: theme.palette.primary.main
			}
		},
		arrowIcon: {
			fontSize: 100,
			color: theme.palette.text.primary
		},
		flexStart: {
			alignSelf: 'flex-start'
		},
		center: {
			alignSelf: 'center',
			width: '100%'
		},
		showAllButton: {
			width: '100px',
			alignSelf: 'center',
			margin: 'auto',
			marginTop: 10,
			marginLeft: 20
		},
		showAllTextButton: {
			color: theme.palette.text.primary,
			fontSize: 10
		},
		horizontalListContainer: {
			display: 'flex',
			position: 'relative',
			alignItems: 'center',
			justifyContent: 'center'
		}
	};
};
