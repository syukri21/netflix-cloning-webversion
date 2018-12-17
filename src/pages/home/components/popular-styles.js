export const styles = (theme) => {
	console.log(theme.palette.secondary.main);
	return {
		container: { padding: '30px' },
		item: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
			justifyContent: 'center',
			alignItems: 'center'
		}
	};
};
