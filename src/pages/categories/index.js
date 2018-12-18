import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Main from './components/main/';

class Categories extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default Categories;
