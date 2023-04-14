import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    //Provider and making all its redux method that's how we connect our app to redux !
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



