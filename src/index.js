import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Store
import { createStore, applyMiddleware } from "redux";
import  myReducer from "./reducers/index";
import { Provider } from "react-redux";
import { fetchListJson } from "./actions/index";

const store = createStore(myReducer, applyMiddleware(thunk));
store.dispatch(fetchListJson());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
