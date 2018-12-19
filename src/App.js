import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import { withRouter } from 'react-router-dom';

import Home from './pages/home/';
import Categories from './pages/categories';
import Detail from './pages/detail';

class App extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/categories' component={Categories} />
					<Route path='/movie/:name' component={Detail} />
				</Switch>
				{this.props.location.pathname === '/' || <Footer />}
			</div>
		);
	}
}

export default withRouter(App);
