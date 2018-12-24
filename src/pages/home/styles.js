export const styles = (theme) => {
	return {
		jumbotron: {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%'
		},
		categories: {
			position: 'relative',
			zIndex: 200,
			background: theme.palette.primary.main,
			display: 'grid',
			gridGap: '80px',
			marginTop: '580px',
			overflowX: 'hidden'
		},
		categoryList: {
			width: '100%'
		},
		containerHomeContent: {
			display: 'flex',
			padding: '20px',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		}
	};
};
