import React from 'react';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';
class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Jumbotorn />
			</div>
		);
	}
}

export default Home;
