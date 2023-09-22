import React from 'react';
import './App.css';
import {NavBar} from './componets/NavBar/NavBar';
import {Redirect, Route, Switch} from 'react-router-dom';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {HeaderContainer} from './componets/Header/HeaderContainer';
import {Login} from './componets/Login/Login';
import ProfileContainer from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';


function App() {
    return (
        <div className="appWrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="appWrapperContent">
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
