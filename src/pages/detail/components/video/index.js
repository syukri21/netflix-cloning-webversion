import React from 'react';
import { withTheme } from '@material-ui/core/styles';

const Video = ({ video, theme }) => (
	<iframe
		style={{
			borderRadius: '10px',
			overflow: 'hidden'
		}}
		title='video'
		width='100%'
		height='100%'
		src={video}
		frameBorder='0'
		allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
		allowFullScreen={true}
	/>
);

export default withTheme()(Video);
