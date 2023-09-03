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



function App() {
    return (
        <div className="appWrapper">
            <Header/>
            <NavBar/>
            <div className="appWrapperContent">
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs/>}/>
                <Route path={'/news'} render={()=> <News/>}/>
                <Route path={'/music'} render={()=> <Music/>}/>
                <Route path={'/settings'} render={()=> <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
