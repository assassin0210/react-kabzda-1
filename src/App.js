import React from 'react';
import "./App.css";
import {Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsLists from "./components/FriendsLists/FriendsLists";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainerComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";


const App = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainerComponent/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={FriendsLists}/>
            </div>
        </div>
    );
}
export default App;
