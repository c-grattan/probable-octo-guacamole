import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const dark = createTheme({
	palette: {
		mode: 'dark'
	}
});

root.render(
  <React.StrictMode>
	<ThemeProvider theme={dark}>
		<CssBaseline />
		<App />
	</ThemeProvider>
  </React.StrictMode>
);