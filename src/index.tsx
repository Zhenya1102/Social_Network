import React from 'react';
import './index.css';
import {AppRootState, store} from './redux/redux-store'
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StoreContext} from './StoreContext';


let rerenderEntireTree = (state: AppRootState) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );

}
rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState()
    rerenderEntireTree(state)
});