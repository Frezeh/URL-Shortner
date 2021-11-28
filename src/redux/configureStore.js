import { createStore, combineReducers, applyMiddleware } from 'redux';
import { url } from './url';
// import { stock } from './stock';
import { history } from './history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            url: url,
            history: history,
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}