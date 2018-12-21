export const styles = (theme) => ({
	card: {
		display: 'grid',
		flexDirection: 'row',
		gridTemplateColumns: '2fr 1fr',
		marginBottom: '10px',
		backgroundColor: '#0A0B0A',
		width: '100%'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		flex: '1 0 auto'
	},
	content: {
		flex: '1 0 auto'
	},
	cover: {
		flex: '1 0 auto'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing.unit,
		paddingBottom: theme.spacing.unit
	},
	playIcon: {
		height: 38,
		width: 38
	},
	lopingStart: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column'
	}
});
