import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';
import { store, persistor } from "./store";

import registerServiceWorker from './registerServiceWorker';

import { PersistGate } from "redux-persist/lib/integration/react";
// const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
