import React, {Component} from 'react';
import "./App.css";
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsLists from "./components/FriendsLists/FriendsLists";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainerComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializApp} from "./Redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className='app-wrapper'>
                <HeaderContainerComponent/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>

                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>

                    <Route path='/users' render={() => <UsersContainer pageTitle={'самурай'}/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={FriendsLists}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps     , {initializApp}))(App);
