import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { UseLayoutContextProvider } from './hooks/context/UseLayoutContextProvider';
import { store } from './redux/store';
import App from './App';
import './index.css';
import { ThemeIndex } from './styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeIndex>
				<CssBaseline>
					<UseLayoutContextProvider>
						<App />
					</UseLayoutContextProvider>
				</CssBaseline>
			</ThemeIndex>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
