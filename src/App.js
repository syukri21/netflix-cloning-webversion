import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

import Home from './pages/home/';
import Categories from './pages/categories';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/categories' component={Categories} />
				</Switch>
				<Route path='/categories' render={() => <Footer />} />
			</div>
		);
	}
}

export default App;
