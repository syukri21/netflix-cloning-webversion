import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/';
import Categories from './pages/categories';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/category' component={Categories} />
				</Switch>
			</div>
		);
	}
}

export default App;
