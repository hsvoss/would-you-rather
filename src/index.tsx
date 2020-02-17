import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import theme from "./theme";
import configureStore from './store';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'));
