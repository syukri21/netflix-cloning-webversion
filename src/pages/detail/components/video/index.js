import React from 'react';

const Video = ({ video }) => (
	<iframe
		style={{
			borderRadius: '10px',
			overflow: 'hidden',
			border: '10px solid #F44336'
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

export default Video;
