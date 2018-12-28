export const styles = (theme) => ({
	root: {
		margin: '0',
		padding: '0'
	},
	slider_frame: {
		backgroundColor: '#0f0',
		position: 'relative',
		margin: '0 auto',
		overflow: 'hidden'
	},
	slider_frame__btn: {
		width: '40px',
		height: '100%',
		background: 'rgba(0, 0, 0, 0.3)',
		position: 'absolute',
		top: '0',
		zIndex: '1000'
	},
	slider_frame__btn_prev: {
		left: '0px'
	},
	slider_frame__btn_next: {
		right: '0px'
	},
	slider_frame__slider_container: {
		transition: 'margin-left 0.2s ease, left 0.5s ease',
		position: 'absolute',
		left: '0'
	},
	slider_frame__slider_container__slide: {
		backgroundColor: '#f00',
		float: 'left',
		position: 'relative',
		top: '0',
		transition: 'width 0.2s ease, height 0.2s ease, top 0.2s ease'
	},
	slider_frame__slider_container__slide_nth_child_even: {
		backgroundColor: 'blue'
	}
});
