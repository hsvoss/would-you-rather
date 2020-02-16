import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import theme from "./theme";
import middleware from './middleware';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(reducer, middleware);
ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline/>
        <Provider store={store}>
            <App/>
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'));
