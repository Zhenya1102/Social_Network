import React from 'react';
import './App.css';
import {Header} from './componets/Header/Header';
import {NavBar} from './componets/NavBar/NavBar';
import {Route} from 'react-router-dom';
import {Profile} from './componets/Profile/Profile';
import {Dialogs} from './componets/Dialogs/Dialogs';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action:{type:any, newText?:string})=> void
}

function App(props: AppPropsType) {

    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">
                <Route path={'/profile'} render={() => <Profile posts={props.state.profilePage.posts}
                                                                dispatch={props.dispatch}
                                                                newPostText={props.state.profilePage.newPostText}
                                                                // updateNewPostText={props.updateNewPostText}
                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                                messages={props.state.dialogsPage.messages}/>}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
