import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';

import App from './app';

class Index extends React.Component {
	render() {
		return <App />;
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
