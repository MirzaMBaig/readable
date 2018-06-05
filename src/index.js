import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(logger, thunk)
    )
)


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
