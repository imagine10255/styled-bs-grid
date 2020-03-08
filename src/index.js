import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {GridThemeProvider} from './lib';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
    gridGutterWidth: 10,
    gridColumns: 24,
    gridBreakpoints: { // defaults below
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1540,
    },
    containerMaxWidths: { // defaults below
        xs: 540,
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        xxl: 1141,
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
