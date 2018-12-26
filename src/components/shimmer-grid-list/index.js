import React from 'react';
//shimmer add
import ContentLoader from 'react-content-loader';

const categoriesLoading = (props) => {
	return (
		<div>
			<ContentLoader
				height={400}
				width={750}
				speed={4}
				primaryColor='#0A0B0A'
				secondaryColor='#323332'
				style={{ marginTop: 20 }}
			>
				<rect x='7.6' y='18.13' rx='0' ry='0' width='118.81' height='25' />
				<rect x='133.6' y='18.13' rx='0' ry='0' width='118.81' height='25' />

				<rect x='7.6' y='59.13' rx='0' ry='0' width='120' height='143' />
				<rect x='132.6' y='59.13' rx='0' ry='0' width='120' height='143' />
				<rect x='256.6' y='59.13' rx='0' ry='0' width='120' height='143' />
				<rect x='381.6' y='59.13' rx='0' ry='0' width='120' height='143' />
				<rect x='506.6' y='59.13' rx='0' ry='0' width='120' height='143' />
				<rect x='632.6' y='59.13' rx='0' ry='0' width='120' height='143' />

				<rect x='7.6' y='207.13' rx='0' ry='0' width='120' height='143' />
				<rect x='132.6' y='207.13' rx='0' ry='0' width='120' height='143' />
				<rect x='256.6' y='207.13' rx='0' ry='0' width='120' height='143' />
				<rect x='381.6' y='207.13' rx='0' ry='0' width='120' height='143' />
				<rect x='506.6' y='207.13' rx='0' ry='0' width='120' height='143' />
				<rect x='632.6' y='207.13' rx='0' ry='0' width='120' height='143' />
			</ContentLoader>
		</div>
	);
};

export default categoriesLoading;
