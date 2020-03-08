import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {GridThemeProvider} from './lib';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
    breakpoints: { // defaults below
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    row: {
        padding: 10, // default 15
    },
    col: {
        padding: 10, // default 15
        gridColumns: 24,
    },
    padding: 10,
    gridColumns: 24,
    container: {
        padding: 10, // default 15
        maxWidth: { // defaults below
            xxl: 1141,
            xl: 1140,
            lg: 960,
            md: 720,
            sm: 540,
            xs: 540,
        },
    },
};

ReactDOM.render(
    <ThemeProvider theme={{primary: '#fff'}}>
        <GridThemeProvider gridTheme={theme}>
            <App/>
        </GridThemeProvider>
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
