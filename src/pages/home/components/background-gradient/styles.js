export const styles = (theme) => ({
	gradient: {
		background: `linear-gradient( ${theme.palette.secondary.main}66, ${theme.palette.primary.main}66, ${theme
			.palette.primary.main})`,
		zIndex: 50,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});
