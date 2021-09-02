import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userSignInReducer } from './reducers/userSignInReducer';
import { tableReducer } from './reducers/tableReducer';

const inititalState = {
    userSignin: {
        userDetails: localStorage.getItem('userDetails')
            ? JSON.parse(localStorage.getItem('userDetails'))
            : null,
    }
    
};

const reducer = combineReducers({
    userSignin: userSignInReducer,
    tableInfo: tableReducer,
    
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    inititalState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;