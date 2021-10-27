import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root';
import logger from "./midlewares/logger.midleware";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;