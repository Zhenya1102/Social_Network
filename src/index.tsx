import React from 'react';
import './index.css';
import {addPost, state, StateType, subscribe, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root')
    );

}
rerenderEntireTree(state);

// subscribe(rerenderEntireTree);