import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'typeface-roboto';
import './main.css';

import App from './app';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#010101'
		},
		secondary: {
			main: '#E84393'
		},
		text: {
			primary: '#fff',
			secondary: '#E84393'
		}
	},
	typography: {
		useNextVariants: true
	}
});

const Index = () => (
	<BrowserRouter>
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</MuiThemeProvider>
		</Provider>
	</BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
