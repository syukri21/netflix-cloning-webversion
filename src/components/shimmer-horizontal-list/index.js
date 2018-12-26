import React from 'react';
//shimmer add
import ContentLoader from 'react-content-loader';

const ShimmerHorizontalList = (props) => {
	return (
		<div>
			<ContentLoader
				height={160}
				width={700}
				speed={4}
				primaryColor='#0A0B0A'
				secondaryColor='#323332'
				style={{ marginBottom: 20 }}
			>
				<rect x='24.9' y='50.13' rx='0' ry='0' width='121.07' height='110.16' />
				<rect x='158.9' y='50.13' rx='0' ry='0' width='121.07' height='110.16' />
				<rect x='292.9' y='50.13' rx='0' ry='0' width='121.07' height='110.16' />
				<rect x='426.9' y='50.13' rx='0' ry='0' width='121.07' height='110.16' />
				<rect x='561.9' y='50.13' rx='0' ry='0' width='121.07' height='110.16' />
				<rect x='25.6' y='5.13' rx='0' ry='0' width='162' height='28' />
			</ContentLoader>{' '}
		</div>
	);
};

export default ShimmerHorizontalList;
