import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsLists from "./components/FriendsLists/FriendsLists";
import {addMessage} from "./Redux/State";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    addPost={props.addPost}
                    updateTextPost={props.updateTextPost}
                    profilePage={props.state.profilePage}/>}/>
                <Route path='/dialogs' render={() => <Dialogs
                    addMessage={props.addMessage}
                    updateTextMessage={props.updateTextMessage}
                    dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={FriendsLists}/>
            </div>
        </div>
    );
}
export default App;
