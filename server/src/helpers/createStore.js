import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

// not trying to render this so no Provider
export default () => {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return store;
}