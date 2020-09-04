import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from './sagas';
import fetchAlbumsReducer from '../containers/albums/list-all/list-all-albums.sagas';

const sagaMiddleware = createSagaMiddleware();

const allReducers = combineReducers({
    albumsList: fetchAlbumsReducer,
});

const configureStore = createStore(allReducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default configureStore;
