import React from 'react';

import Jumbotorn from './components/jumbotron';
import Header from '../../components/header';
class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Jumbotorn />
				<div style={{ height: 2000 }} />
			</div>
		);
	}
}

export default Home;
